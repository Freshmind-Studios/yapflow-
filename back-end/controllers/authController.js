const UserService = require("../services/userService");

module.exports = {
  register: async (req, res) => {
    const { tag, password } = req.body;
    const exists = await UserService.userExists(tag);

    if (exists) return res.send({ valid: false });

    const hash = await UserService.hashPassword(password);
    const { userId } = await UserService.addUser(tag, hash, req.session.id);
    req.session.userId = userId;

    return res.send({ valid: true });
  },
  login: async (req, res) => {
    const { tag, password } = req.body;
    const user = await UserService.getUserByTag(tag);

    if (!user) return res.send({ valid: false });

    const passwordMatch = await UserService.comparePasswords(password, user.password);

    if (passwordMatch) {
      req.session.userId = user.userId;
      await UserService.updateUser(user.userId, { sessionId: req.session.id });
      return res.send({ valid: true });
    }

    return res.send({ valid: false });
  },
  logout: async (req, res) => {
    req.session.destroy((err) => res.send({ valid: !err }));
  },
  getStatus: async (req, res) => res.send({ valid: true }),
  getSession: async (req, res) => res.send({ sessionId: req.session.id })
};
