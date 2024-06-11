const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

module.exports = {
  userExists: async (tag) => await User.exists({tag}),
  addUser: async (tag, hash, sessionId) => {
    const user = await User.create({ tag, password: hash, sessionId });
    return { userId: user.id };
  },
  updateUser: async (userId, data) => await User.findByIdAndUpdate(userId, data),
  deleteUser: async (userId) => await User.findByIdAndDelete(userId),
  getUserByTag: async (tag) => {
    const user = await User.findOne({tag});

    if (!user) {
      return null;
    }

    return { ...user.toObject(), userId: user.id };
  },
  getUserById: async (userId) => {
      const user = await User.findById(userId);
  
      if (!user) {
        return null;
      }
  
      return { ...user.toObject(), password: undefined, __v: undefined };
  },
  getIdBySessionId: async (sessionId) => {
    const user = await User.findOne({ sessionId });

    if (!user) {
      return null;
    }

    return user.id;
  },
  comparePasswords: async (password, hash) => await bcrypt.compare(password, hash),
  hashPassword: async (password) => await bcrypt.hash(password, 10)
};
