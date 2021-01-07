const router = require('express').Router()
const ControllerJob = require('../controllers/jobController')

router.get('/', ControllerJob.job)

module.exports = router