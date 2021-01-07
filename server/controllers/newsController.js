const axios = require('axios')
const API_KEY = process.env.API_KEY

class ControllerNews{
    static getNews(req, res, next) {
        let newsUrl = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
        axios.get(newsUrl)
            .then(function (response) {
                // handle success
                res.status(200).json(response.data.articles)
            })
            .catch(function (error) {
                // handle error
                res.status(500).json({msg: error.message})
            })
    }

}

module.exports = ControllerNews