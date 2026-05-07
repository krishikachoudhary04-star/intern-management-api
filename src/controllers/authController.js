const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../middleware/auth");

/* REGISTER */
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed
    });

    const token = generateToken(user);

    res.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        token
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* LOGIN */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);

    res.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        token
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ME */
const getMe = (req, res) => {
  res.json({ success: true, data: req.user });
};

module.exports = { register, login, getMe };