const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: String,
    pwd: String
});

const Model = mongoose.model('User', UserSchema);
module.exports = Model;