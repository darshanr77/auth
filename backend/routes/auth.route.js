import express from "express";
import { signup } from "../controllers/auth.controller.js"; // ✅ add this

const router = express.Router();

// ✅ ADD THIS
router.post("/signup", signup);

router.post("/login", (req, res) => {
    res.send("login route");
});

export default router;