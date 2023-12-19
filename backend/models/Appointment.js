const mongoose = require("mongoose");
const Hospital = require("../models/Hospital");
const Schema = mongoose.Schema;

const AppointmentSchema = new mongoose.Schema(
  {
    serviceType: {
      type: String,
    },
    date: {
      type: String,
    },
    timeslot: {
      type: String,
    },
    note: {
      type: String,
    },
    hospital: {
      type: Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);
