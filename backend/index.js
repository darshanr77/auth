import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("You are in main page congratulations!");
});

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);


connectDB();

app.listen(PORT, () => {
    console.log(`Server is live on port: ${PORT}`);
});
 