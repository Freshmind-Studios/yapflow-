const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    users: {
        type: Array,
        required: true,
    },
    messages: {
        type: Array,
    }
});

module.exports = mongoose.model("Yappie", userSchema);
