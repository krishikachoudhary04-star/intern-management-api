const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String
}, { timestamps: true });

module.exports = mongoose.model("Intern", internSchema);