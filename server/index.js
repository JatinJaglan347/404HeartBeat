import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import userRoutes from "./routes/user.routes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.use (cors());
app.use(express.json());

app.use("/api/users", userRoutes); 

app.get('/', (req, res) => {
    res.send('Hello from server');
})

connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });