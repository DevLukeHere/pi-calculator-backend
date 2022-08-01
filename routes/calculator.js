const express = require("express");
const { getPiValues, updatePiValue } = require("../controllers/piController");
const router = express.Router();

// GET pi value
router.get("/", getPiValues);

// UPDATE pi value
router.patch("/:id", updatePiValue);

module.exports = router;
