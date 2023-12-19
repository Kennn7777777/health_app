const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const userRouter = require("./routes/user");
const generalRouter = require("./routes/general");
const apptRouter = require("./routes/appointment");
const hospitalRouter = require("./routes/hospital");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/", generalRouter);
app.use("/api/appointments", apptRouter);
app.use("/api/hospital", hospitalRouter);

// app.use("/api/user", userRouter);

app.listen(process.env.PORT || port, () =>
  console.log(`Healthapp api server listening on port ${port}!`)
);
