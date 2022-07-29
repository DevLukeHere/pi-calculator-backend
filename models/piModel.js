const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const piSchema = new Schema(
  {
    pi: {
      type: Number,
      required: true,
      // default: 3
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PiValue", piSchema);
