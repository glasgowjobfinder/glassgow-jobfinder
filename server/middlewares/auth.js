const { User } = require('../models/index');
const { verifyToken } = require('../helpers/jwt');

async function authentication (req, res, next) {
    try {
        let payload = await verifyToken(req.headers.access_token);
        let data = await User.findOne({ where: { id: payload.id } });

        if (data) {
            next();
        } else {
            next(Error('Please login first'));
        }
    } catch (err) {
        res.status(500).json('Server Error');
    }
}

module.exports = { authentication };