const Intern = require("../models/Intern");

/* ── CREATE INTERN ── */
const createIntern = async (req, res) => {
  try {
    const intern = await Intern.create(req.body);

    res.status(201).json({
      success: true,
      message: "Intern created successfully",
      data: intern
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

/* ── GET ALL INTERNS ── */
const getInterns = async (req, res) => {
  try {
    const interns = await Intern.find();

    res.json({
      success: true,
      data: interns
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

/* ── GET SINGLE INTERN ── */
const getInternById = async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id);

    if (!intern) {
      return res.status(404).json({
        success: false,
        message: "Intern not found"
      });
    }

    res.json({
      success: true,
      data: intern
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

/* ── UPDATE INTERN ── */
const updateIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!intern) {
      return res.status(404).json({
        success: false,
        message: "Intern not found"
      });
    }

    res.json({
      success: true,
      message: "Intern updated",
      data: intern
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

/* ── DELETE INTERN ── */
const deleteIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndDelete(req.params.id);

    if (!intern) {
      return res.status(404).json({
        success: false,
        message: "Intern not found"
      });
    }

    res.json({
      success: true,
      message: "Intern deleted"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  createIntern,
  getInterns,
  getInternById,
  updateIntern,
  deleteIntern
};