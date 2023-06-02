const express = require('express')
const router = express.Router()
const resultsCtrl = require('../controllers/results')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, resultsCtrl.index)

module.exports = router
