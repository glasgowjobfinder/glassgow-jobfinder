const router = require('express').Router()
const ControllerNews = require("../controllers/newsController")

router.get("/", ControllerNews.getNews)


module.exports = router