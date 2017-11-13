const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const checkAuth = require('../helpers/checkAuth')

// define the user page route
router.get('/', checkAuth.isLogin, checkAuth.isAdmin, usersController.findAll)
router.get('/:id', checkAuth.isLogin, checkAuth.isUser, usersController.findById)
router.post('/', checkAuth.isLogin, checkAuth.isAdmin, usersController.create)
router.delete('/:id', checkAuth.isLogin, checkAuth.isAdmin, usersController.destroy)
router.put('/:id', checkAuth.isLogin, checkAuth.isUser, usersController.update)
router.patch('/:id', checkAuth.isLogin, checkAuth.isUser, usersController.update)

module.exports = router
