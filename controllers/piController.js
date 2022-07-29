const Pi = require("../models/piModel");
const mongoose = require("mongoose");

// get pi values
const getPiValues = async (req, res) => {
  const piValues = await Pi.find({}).sort({ createdAt: -1 });

  res.status(200).json(piValues);
};

// get single pi value
const getPiValue = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such value" });
  }

  const pi = await Pi.findById(id);

  if (!pi) {
    return res.status(404).json({ error: "No such value" });
  }

  res.status(200).json(pi);
};

// create pi value
const createPiValue = async (req, res) => {
  const { pi } = req.body;

  try {
    const piValue = await Pi.create({ pi });
    res.status(200).json(piValue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update pi value
const updatePiValue = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such value" });
  }

  const pi = await Pi.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!pi) {
    return res.status(400).json({ error: "No such value" });
  }

  res.status(200).json(pi);
};

module.exports = { createPiValue, getPiValues, getPiValue, updatePiValue };
