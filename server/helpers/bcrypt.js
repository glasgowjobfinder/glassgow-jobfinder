const bcrypt = require('bcryptjs');

function hashPass (rawPass) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(rawPass, salt);

    return hash;
}

function checkPass (rawPass, hashed) {
    return bcrypt.compareSync(rawPass, hashed);
}

module.exports = { hashPass, checkPass };