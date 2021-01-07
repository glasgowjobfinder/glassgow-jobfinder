const router = require('express').Router()

router.use('/', user)
//router.use(authenticate)
router.use('/job', job)
router.use('/news', news)
router.use('/trivia', trivia)


module.exports = router