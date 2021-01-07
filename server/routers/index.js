const router = require('express').Router()
const user = require('./user.js');
const job = require('./job.js')
const news = require('./news.js')
const trivia = require('./trivia.js')

router.use('/', user)
//router.use(authenticate)
router.use('/job', job)
router.use('/news', news)
router.use('/trivia', trivia)


module.exports = router