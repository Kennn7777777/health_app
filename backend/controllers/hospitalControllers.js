const Appointment = require("../models/Appointment");
const Hospital = require("../models/Hospital");

module.exports = {
  // new all hospitals
  getHospitals: async (req, res) => {
    try {
      const hospitals = await Hospital.find().sort({ createdAt: -1 });
      res.status(200).json(hospitals);
    } catch (error) {
      res.status(500).json("fail to retrieve");
    }
  },
  createHospital: async (req, res) => {
    try {
      const hospital = new Hospital(req.body);

      await hospital.save();
      res.status(200).json("Hospital created successfully!");
    } catch (error) {
      res.status(500).json("fail to create");
    }
  },
};
