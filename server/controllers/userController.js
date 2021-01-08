const {OAuth2Client} = require('google-auth-library')
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

    static loginGoogle(req, res , next){
        const {id_token} = req.body
        const client = new OAuth2Client(process.env.GOOGLE_API)
        let payload = null
        //console.log(id_token)
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.GOOGLE_API
        })
        .then(ticket =>{
            payload = ticket.getPayload()
            return User.findOne({where: {email: payload.email}})
        })
        .then(user =>{
            if(!user){
                return User.create({
                    email: payload.email,
                    password: Math.floor(Math.random()*1000) + 'iniDariGoogle',
                    fullName: payload.name
                })
            }else {
                return user
            }
        })
        .then(user =>{
            let googleSign = {
                id: user.id,
                email: user.email
            }
            let acces_token = getToken(googleSign)
            res.status(200).json({acces_token})
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = ControllerUser