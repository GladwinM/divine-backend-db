// divine-backend/routes/userRoutes.js
import express from "express";
import User from "../models/userSchema.js"; // Ensure path is correct

const router = express.Router();

// Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create New User
router.post("/", async (req, res) => {
  const { name, mobileNumber, email, gender, photo } = req.body;
  const newUser = new User({ name, mobileNumber, email, gender, photo });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Single User by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update User by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, mobileNumber, email, gender, photo } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, mobileNumber, email, gender, photo },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete User by ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
