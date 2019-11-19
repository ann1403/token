const Ajv = require('ajv');
const UserModel = require("../models/userModel");
module.exports = {
    createOne: async(req, res) => {
        try {
            const { login, pwd } = req.body
            const new_user1 = await new UserModel({
                login,
                pwd
            });
            await new_user1.save();
            return data;
        } catch (err) {

        }
    }
}