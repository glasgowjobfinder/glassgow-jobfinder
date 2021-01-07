const { User } = require('../models/index');
const { verifyToken } = require('../helpers/jwt');

async function authentication (req, res, next) {
    try {
        if(!req.headers.access_token){
            return res.status(401).json({msg: `please login first`})
        }
        let payload = await verifyToken(req.headers.access_token);
        let data = await User.findOne({ where: { email: payload.email } });

        if (data) {
            next();
        } else {
            res.status(401).json({msg: `please login first`})
            //next(Error('Please login first'));
        }
    } catch (err) {
        //console.log(err)
        res.status(500).json('Server Error');
    }
}

module.exports = { authentication };