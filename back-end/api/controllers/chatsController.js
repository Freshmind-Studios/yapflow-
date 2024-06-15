const ChatsService = require('../services/chatsService');

module.exports = {
    chat: async (req, res) => {
        const { yappieId } = req.params;

        if (!yappieId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({ message: "Invalid Yappie ID." })
        }

        const yappie = await ChatsService.getYappieById(yappieId);

        if (!yappie) {
            return res.status(404).send({ message: "Yappie not found." });
        }

        return res.status(200).send({ ...yappie });
    }
}