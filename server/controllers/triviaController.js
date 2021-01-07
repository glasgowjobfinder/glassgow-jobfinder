const axios = require("axios").default
class ControllerTrivia {
    static getTrivia (req, res) {
        let trivia = 'https://opentdb.com/api.php?amount=20&category=18&type=boolean'
        axios.get(trivia)
        .then(response => {
            let data = response.data.results
            res.status(200).json(data)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerTrivia