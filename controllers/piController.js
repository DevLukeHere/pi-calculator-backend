const Pi = require("../models/piModel");
const mongoose = require("mongoose");

// get Pi value
const getPiValues = async (req, res) => {
  const piValues = await Pi.find({}).sort({ createdAt: -1 });

  res.status(200).json(piValues);
};

// update Pi value
const updatePiValue = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such value" });
  }

  let total = 0;
  let final = 0;
  let precision = req.body.precision + 1;

  // algorithm to calculate the value of Pi using the Gregory-Liebniz series
  for (let n = 0; n < 1000000; n++) {
    let numerator = Math.pow(-1, n);
    let denominator = 2 * n + 1;

    total += numerator / denominator;
  }

  final = parseFloat((4 * total).toFixed(precision));

  const pi = await Pi.findOneAndUpdate({
    _id: id,
    ...req.body,
    precision: precision,
    pi: final,
  });

  if (!pi) {
    return res.status(400).json({ error: "No such value" });
  }

  // return updated value of Pi to frontend
  res.status(200).json({ _id: id, precision: precision, pi: final });
};

module.exports = { getPiValues, updatePiValue };
