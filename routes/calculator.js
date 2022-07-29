const express = require("express");
const {
  createPiValue,
  getPiValues,
  getPiValue,
  updatePiValue,
} = require("../controllers/piController");
const router = express.Router();

// GET pi value
router.get("/", getPiValues);

// POST pi value
router.post("/:id", createPiValue);

// UPDATE pi value
router.patch("/:id", updatePiValue);

module.exports = router;
