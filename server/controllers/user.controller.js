import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

export const registerUser = asyncHandler(async(req , res )=>{
    const {name , email , password } =req.body;
    
    const userExists = await User.findOne({email});
    if(userExists) throw new ApiError(400, "User already exists");
    
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email, 
        password: hashedPassword,
    });

    const token =generateToken(user._id , user.role );
    res.status(201).json(new ApiResponse(201, {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
    }, "User registered successfully"));


    

})


export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) throw new ApiError(401, "Invalid email or password");
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new ApiError(401, "Invalid email or password");
  
    const token = generateToken(user._id, user.role);
  
    res.status(200).json(new ApiResponse(200, {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    }, "Login successful"));
  });

  export const getProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw new ApiError(404, "User not found");
  
    res.status(200).json(new ApiResponse(200, user, "Profile fetched"));
  });
  

  export const updateProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
  
    if (!user) throw new ApiError(404, "User not found");
  
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
  
    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }
  
    await user.save();
  
    res.status(200).json(new ApiResponse(200, {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    }, "Profile updated"));
  });
  

  export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select("-password");
  
    res.status(200).json(new ApiResponse(200, users, "All users fetched"));
  });
  

  export const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
  
    if (!user) throw new ApiError(404, "User not found");
  
    await user.deleteOne();
  
    res.status(200).json(new ApiResponse(200, {}, "User deleted"));
  });