const axios = require("axios").default
class ControllerTrivia {
    static getTrivia (req, res, next) {
        let trivia = 'https://opentdb.com/api.php?amount=20&category=18&type=boolean'
        axios.get(trivia)
        .then(response => {
            let data = response.data.results
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ControllerTrivia