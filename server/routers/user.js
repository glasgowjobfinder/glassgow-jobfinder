const express = require('express');
const ControllerUser = require('../controllers/userController');
const user = express.Router();

user.post('/register', ControllerUser.register);
user.post('/login', ControllerUser.login);

module.exports = user;