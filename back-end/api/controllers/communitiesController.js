const CommunitiesService = require('../services/communitiesService');

module.exports = {
    community: async (req, res) => {
        const { yapId } = req.params;

        if (!yapId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({ message: "Invalid Yap ID." })
        }

        const yap = await CommunitiesService.getYapById(yapId);

        if (!yap) {
            return res.status(404).send({ message: "Yap not found." });
        }

        return res.status(200).send({ ...yap });
    }
}