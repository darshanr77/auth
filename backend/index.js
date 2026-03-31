import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("api/auth",authRoutes);

app.get("/", (req, res) => {
  res.send("You are in main page congratulations!");
});


connectDB();

app.listen(PORT, () => {
    console.log(`Server is live on port: ${PORT}`);
});
 