const UserService = require("../services/userService");

module.exports = { 
  get: async (req, res) => {
    const { userId } = req.params;

    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.send({ valid: false });
    }

    const user = await UserService.getUserById(userId);

    if (!user) {
      return res.send({ valid: false });
    }

    return res.send({ user });
  },
  tag: async (req, res) => {
    const { tag } = req.params;

    const user = await UserService.getUserByTag(tag);

    if (!user) {
      return res.send({ valid: false });
    }

    return res.send({ userId: user.userId, valid: true });
  },
};
