const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    picture: {
        data: Buffer,
        contentType: String
    },
    users: {
        type: Array,
        required: true,
    },
    messages: {
        type: Array,
    },
});

module.exports = mongoose.model("Yappie", userSchema);
