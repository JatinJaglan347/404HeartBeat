import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  getAllUsers,
  deleteUser,
} from "../controllers/user.controller.js";


const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private routes (user must be logged in)
router.get("/getme",  getProfile);
router.put("/updateme", updateProfile);

// Admin-only routes
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);

export default router;
