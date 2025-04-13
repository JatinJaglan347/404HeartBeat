import jwt from 'jsonwebtoken';

const generateToken = (userId, role = "user") => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};

export default generateToken;
