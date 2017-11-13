const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')

// define the home page route
router.post('/signup', indexController.create)
router.post('/signin', indexController.signin)

module.exports = router
