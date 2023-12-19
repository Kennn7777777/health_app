const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    address: {
      type: String,
    },
    services: {
      type: [String],
    },
    openingHours: {
      type: String,
    },
    info: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hospital", HospitalSchema);
