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
  }
};
