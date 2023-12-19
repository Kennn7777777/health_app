const User = require("../models/User");

module.exports = {
  register: async (req, res) => {
    try {
      const { email } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(401).json("email already registered");
      }

      // create new user
      const newUser = new User(req.body);

      // save to database
      await newUser.save();

      res.status(200).json("user registered successfully");
    } catch (error) {
      res.status(500).json("failed to register");
      console.log(error);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // check if user exists
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json("invalid email or password");
      }

      // check if user password is correct
      if (user.password !== password) {
        return res.status(401).json("invalid password");
      }
      console.log("login");
      res.status(200).json({ userId: user._id });
    } catch (error) {
      res.status(500).json("login failed");
    }
  },
};
