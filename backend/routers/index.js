const express = require('express')
const router = express.Router()
const auth = require('./auth')
const authentication = require('../middlewares/authentication')
const revenue = require('./revenue')

router.use(auth)
router.use(authentication)
router.use(revenue)


module.exports = router