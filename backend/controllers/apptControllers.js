const Appointment = require("../models/Appointment");
const User = require("../models/User");

module.exports = {
  // new booking appointment
  newAppt: async (req, res) => {
    try {
      // id, object
      const { userId, appt } = req.body;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(401).json("User not found");
      }

      // create new appointment
      const newAppt = new Appointment(appt);
      // add new appointment reference
      user.appointments.push(newAppt._id);
      // save to database
      await user.save();
      await newAppt.save();

      res.status(200).json("booked successfully!");
    } catch (error) {
      console.log(error);
      res.status(500).json("fail to book");
    }
  },

  // return all appointments by user
  getApptByUser: async (req, res) => {
    try {
      const userId = req.params.id;

      //   const appts = await User.findById(userId).populate("appointments")
      //     .appointments;
      const appts = await User.findById(userId)
        .populate("appointments")
        .populate({
          path: "appointments",
          populate: {
            path: "hospital",
            // select: "name address",
          },
        })
        .select("appointments hospital -_id");

      console.log(appts);

      res.status(200).json(appts);
    } catch (error) {
      console.log(error);
      res.status(500).json("fail to retrieve");
    }
  },
};
