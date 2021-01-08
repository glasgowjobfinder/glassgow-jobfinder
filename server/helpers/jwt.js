const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

function getToken (payload) {
    let token = jwt.sign(payload, SECRET_KEY);
    
    return token;
}

function verifyToken (token) {
    return jwt.verify(token, SECRET_KEY);
}

module.exports = { getToken, verifyToken };