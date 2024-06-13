const YappieService = require('../services/yappieService');

module.exports = {
    yappie: async (req, res) => {
        const { yappieId } = req.params;

        if (!yappieId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.send({ valid: false });
        }

        const yappie = await YappieService.getYappieById(yappieId);

        if (!yappie) {
            return res.send({ valid: false });
        }

        return res.send({ yappie, valid: true });
    },
    chats: async (req, res) => {
        const { yappieId } = req.params;

        if (!yappieId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.send({ valid: false });
        }

        const yappie = await YappieService.getYappieById(yappieId);

        if (!yappie) {
            return res.send({ valid: false });
        }

        return res.send({messages: yappie.messages, valid: true});
    }
}