const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
// const isLogin = require('../helpers/isLogin')

// define the user page route
router.post('/signup', usersController.create)
router.post('/signin', usersController.signin)
router.get('/users', usersController.findAll)
router.get('/users/:id', usersController.findById)
router.post('/users', usersController.create)
router.delete('/users/:id', usersController.destroy)
router.put('/users/:id', usersController.update)
router.patch('/users/:id', usersController.update)

module.exports = router
