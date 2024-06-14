const YapService = require('../services/yappieService');

module.exports = {
    yap: async (req, res) => {
        const { yapId } = req.params;

        if (!yapId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.send({ valid: false });
        }

        const yap = await YapService.getYapById(yapId);

        if (!yap) {
            return res.send({ valid: false });
        }

        return res.send({ yap, valid: true });
    },
    zones: async (req, res) => {
        const { yapId } = req.params;

        if (!yapId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.send({ valid: false });
        }

        const yap = await YappieService.getYapById(yapId);

        if (!yap) {
            return res.send({ valid: false });
        }

        return res.send({zones: yap.zones, valid: true});
    }
}