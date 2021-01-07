const { User } = require('../models/index');
const { checkPass } = require('../helpers/bcrypt');
const { getToken } = require('../helpers/jwt');

class ControllerUser {
    static async register (req, res, next) {
        try {
            let data = {
                email: req.body.email,
                password: req.body.password,
                fullName: req.body.fullName
            };

            data = await User.create(data);
            

            res.status(201).json(data);
        } catch (err) {
            if (err.errors) {
                next(err)
            }

            next(err)
        }
    }

    static async login (req, res, next) {
        try {
            let data = await User.findOne({ where: { email: req.body.email } });
            if (data) {
                if (checkPass(req.body.password, data.password)) {
                    let token = await getToken({
                        id: data.id,
                        email: data.email
                    });
                    res.status(200).json({ acces_token: token });
                } else {
                    next({name: "wrong Email/Password"})
                }
            } else {
                next({name: "wrong Email/Password"})
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerUser