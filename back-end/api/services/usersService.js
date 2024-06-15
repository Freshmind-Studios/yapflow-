const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

module.exports = {
  createUser: async (tag, hash) => await User.create({ tag, password: hash }),
  updateUser: async (userId, data) => await User.findByIdAndUpdate(userId, data),
  deleteUser: async (userId) => await User.findByIdAndDelete(userId),
  getUserByTag: async (tag) => await User.findOne({ tag }).select().lean(),
  getUserById: async (userId) => await User.findById(userId).select("-password").lean(),
  comparePasswords: async (password, hash) => await bcrypt.compare(password, hash),
  hashPassword: async (password) => await bcrypt.hash(password, 10)
};
