const axios = require('axios')

class ControllerJob{
    static job(req, res, next){
        let apiJob = 'https://jobs.github.com/positions.json'
        axios.get(apiJob)
        .then(response =>{
            return res.status(200).json(response.data)
        })
        .catch(err =>{
            console.log(err)
            return res.status(500).json({msg: `Internal Server Error`})
        })
    }
}

module.exports = ControllerJob