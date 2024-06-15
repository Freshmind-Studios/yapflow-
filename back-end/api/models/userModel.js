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
  status: {
    type: String
  },
  friends: {
    type: Array,
    default: []
  },
}, {versionKey: false});

module.exports = mongoose.model("User", userSchema);
