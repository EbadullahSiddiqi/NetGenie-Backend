// routes/users.js
import express from "express";
import User from "../../api/models/User.js";

const router = express.Router();

// Create a new user
router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newUser = new User({ name, email, phone });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Edit User
router.put("/", async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newUser = new User({ name, email, phone });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Delete User
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "user deleted" });
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
