const express = require('express')
const router = express.Router()
const Revenue = require('../controllers/revenue')

router.get('/revenue', Revenue.showRevenue)
router.post('/addRev',Revenue.addRevenue)

module.exports = router