const UserModel = require("../models/userModel");
module.exports = {
    loginOne: async(login, pwd) => {
        const user2 = await UserModel.findOne({ login });
        console.log(user2)
        return user2;
    }
}