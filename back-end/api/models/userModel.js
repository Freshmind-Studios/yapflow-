const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String
  },
  picture: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
  sessionId: {
    type: String,
    required: true,
    unique: true,
  },
  yappies: {
    type: Array
  },
  yaps: {
    type: Array
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);
