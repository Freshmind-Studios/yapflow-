const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
    unique: true,
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
  }
});

module.exports = mongoose.model("User", userSchema);
