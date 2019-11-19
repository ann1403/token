var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const usersSchema = require('../schemas/userSchema');
const UserModel = require("../models/userModel");
const { tokenSecret } = require("../configs/keys");

const Ajv = require('ajv');
const ajv = new Ajv();

const { createOne } = require("../controllers/saveuserController");
const { loginOne } = require("../controllers/loginuserController");

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(tokenSecret)
    if (req.cookies['jwt-token']) {
        res.render('index', { title: 'Express' });
    } else {
        res.redirect('/auth');
    }

});
router.get('/auth', function(req, res, next) {
    UserModel.find()
        .then(data => {
            res.render('auth', { users: data });
        })
        .catch(err => { if (err) throw err });
});
router.post('/auth', async(req, res) => {
    const new_user = await new UserModel({});
    const { a1 } = await createOne(req.body);
    console.log(a1.id)
    let a = jwt.sing({ id: _id }, tokenSecret)
    let b = jwt.verify(req.cookies['jwt-token'], tokenSecret)
    let c = jwt.decode(req.cookies['jwt-token']);
    console.log(a, b, c)
    res.redirect('/auth');
});
router.post('/login', async(req, res) => {
    const { login, pwd } = req.body;
    const user = await loginOne(login, pwd);
    console.log(user)
    console.log(pwd)
    console.log(user.pwd)
    if (!user) {
        res.render('auth', { err: 'User not found!' });
    }
    if (pwd === user.pwd) {
        res.redirect('/');
    } else {
        res.render('auth', { err: 'Login or password is incorrect!' });
    }
});
module.exports = router;