const UserService = require("../services/usersService");

module.exports = {
  auth: async (req, res) => {
    if (req.session.userId) {
      const user = await UserService.getUserById(req.session.userId);
      return res.status(200).send({ userId: user._id, sessionId: req.session.id});
    }

    const { tag, password, register } = req.body;

    if (!tag || !password) {
      return res.status(400).send({ message: "Invalid payload." });
    }

    const user = await UserService.getUserByTag(tag);

    if (!user && register) {
      const hashed = await UserService.hashPassword(password);
      const user = await UserService.createUser(tag, hashed);
      req.session.userId = user._id;

      return res.status(201).send({ userId, sessionId: req.session.id });
    } else if (!user && !register) {
      return res.status(404).send({ message: "User not found." })
    }

    const valid = await UserService.comparePasswords(password, user.password);
    if (!valid) {
      return res.status(401).send({ message: "Invalid credentials." });
    }

    req.session.userId = user._id;

    return res.status(200).send({ userId: user._id, sessionId: req.session.id});

  },
  remove: async (req, res) => {
    req.session.destroy(() => res.status(200).send({ message: "Session removed."}));
  }
};
