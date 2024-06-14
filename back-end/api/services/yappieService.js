const Yappie = require('../models/yappieModel');

module.exports = {
    getYappieById: async (yappieId) => {
        return await Yappie.findById(yappieId);
    },

    createYappie: async (users) => {
        const yappie = await Yappie.create({ users });

        return { yappieId: yappie.id };
    }
}