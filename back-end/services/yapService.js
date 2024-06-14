const Yap = require('../models/yapModel');

module.exports = {
    getYapById: async (yapId) => {
        return await Yap.findById(yapId);
    },
    
    createYap: async (name, users) => {
        const yap = await Yappie.create({ name, users });

        return { yapId: yap.id };
    }
}