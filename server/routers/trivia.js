const router = require('express').Router()
const ControllerTrivia = require('../controllers/triviaController')

router.get('/', ControllerTrivia.getTrivia)

module.exports = router