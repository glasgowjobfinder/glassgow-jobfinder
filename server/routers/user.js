const express = require('express');
const ControllerUser = require('../controllers/userController');
const user = express.Router();

user.post('/register', ControllerUser.register);
user.post('/login', ControllerUser.login);
user.post('/loginGoogle', ControllerUser.loginGoogle)

module.exports = user;