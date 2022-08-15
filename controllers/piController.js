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

  // validate if object ID exists in database
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such value" });
  }

  // start of algorithm to calculate the value of Pi using the Gregory-Liebniz series
  let total = 0;
  let final = 0;
  let precision = req.body.precision + 1;

  for (let n = 0; n < 1000000; n++) {
    let numerator = Math.pow(-1, n);
    let denominator = 2 * n + 1;

    total += numerator / denominator;
  }

  final = parseFloat((4 * total).toFixed(precision));
  // end of algorithm

  // let i = 1n;
  // let x = 3n * 10n ** 1020n;
  // let pi_final = x;
  // let final_value = 0;

  // while (x > 0) {
  //   x = (x * i) / ((i + 1n) * 4n);
  //   pi_final += x / (i + 2n);
  //   i += 2n;
  // }

  // final_value = pi_final / 10n ** 20n;

  // console.log("final_value:", final_value);

  // find and update object based on calculated Pi value
  const pi = await Pi.findOneAndUpdate({
    _id: id,
    ...req.body,
    precision: precision,
    pi: final,
  });

  // check if Pi value exists in database
  if (!pi) {
    return res.status(400).json({ error: "No such value" });
  }

  // return updated value of Pi to frontend
  res.status(200).json({ _id: id, precision: precision, pi: final });
};

module.exports = { getPiValues, updatePiValue };
