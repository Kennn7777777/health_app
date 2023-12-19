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

      res.status(200).json(appts);
    } catch (error) {
      console.log(error);
      res.status(500).json("fail to retrieve");
    }
  },

  // user id
  deleteApptById: async (req, res) => {
    try {
      const { userId, apptId } = req.body;

      const user = await User.findById(userId);
      await Appointment.findByIdAndDelete(apptId);

      user.appointments = user.appointments.filter(
        (appt) => !appt.equals(apptId)
      );
      await user.save();

      res.status(200).json("deleted successfully!");
    } catch (error) {
      console.log(error);
      res.status(500).json("fail to delete");
    }
  },
};
