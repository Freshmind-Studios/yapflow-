const UsersService = require("../services/usersService");

module.exports = { 
  user: async (req, res) => {
    const { userId } = req.params;

    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send({ message: "Invalid User ID." });
    }

    const user = await UsersService.getUserById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    return res.status(200).send({ ...user });
  }
};
