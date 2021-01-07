const { User } = require('../models/index');
const { verifyToken } = require('../helpers/jwt');

async function authentication (req, res, next) {
    try {
        if(!req.headers.access_token){
            next({name: 'please login first'})
        }
        let payload = await verifyToken(req.headers.access_token);
        let data = await User.findOne({ where: { email: payload.email } });

        if (data) {
            next();
        } else {
            next({name: 'please login first'})
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { authentication };