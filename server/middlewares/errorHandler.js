function errorHandler (err, req, res, next) {
    if (err) {
        if (err.name === 'SequelizeValidationError') {
            res.status(400).json({message: err.message})
        } else if (err.name === 'SequelizeUniqueConstraintError'){
            res.status(400).json({message: err.errors[0].message})
        } else if (err.name === 'wrong Email/Password') {
            res.status(400).json({message: "wrong Email/Password"})
        } else if (err.name === 'please login first') {
            res.status(401).json({msg: `please login first`})
        } else {
            res.status(500).json(err)
        }
    } 
}

module.exports = errorHandler