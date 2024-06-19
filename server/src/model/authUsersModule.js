const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "Accountant",
        "Software",
        "HR",
        "CallCenter",
        "VirtualTeam",
        "MonitoringTeam",
        "Bouncers/Driver",
        "Security/CCTV",
        "Digital Marketing",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Authuser", userSchema);
