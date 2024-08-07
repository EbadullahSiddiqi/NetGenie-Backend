import express from "express";
import connectDB from "./models/db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/test", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
