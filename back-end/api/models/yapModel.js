const mongoose = require("mongoose");

const yapSchema = new mongoose.Schema({
    users: {
        type: Array,
        required: true,
    },
    zones: {
        type: Array,
    },
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    }

});

module.exports = mongoose.model("Yap", yapSchema);
