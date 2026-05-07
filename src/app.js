const express = require("express");
const app = express();

// 🔹 Middlewares
app.use(express.json());

// 🔹 Routes import
const authRoutes = require("./routes/authRoutes");
const internRoutes = require("./routes/internRoutes");

// 🔹 Routes use
app.use("/api/auth", authRoutes);
app.use("/api/interns", internRoutes);

// 🔹 Health check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy 🟢"
  });
});

// 🔹 Default route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// 🔹 Export app
module.exports = app;