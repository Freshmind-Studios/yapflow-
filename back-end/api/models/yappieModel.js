const mongoose = require("mongoose");

const yappieSchema = new mongoose.Schema({
    users: {
        type: Array,
        required: true,
    },
    messages: {
        type: Array,
    }
}, {versionKey: false});

module.exports = mongoose.model("Yappie", yappieSchema);
