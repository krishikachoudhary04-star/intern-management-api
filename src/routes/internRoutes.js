const express = require("express");
const router = express.Router();

const {
  createIntern,
  getInterns,
  getInternById,
  updateIntern,
  deleteIntern
} = require("../controllers/internController");

const { protect } = require("../middleware/auth");

router.post("/", protect, createIntern);
router.get("/", protect, getInterns);
router.get("/:id", protect, getInternById);
router.put("/:id", protect, updateIntern);
router.delete("/:id", protect, deleteIntern);

module.exports = router;