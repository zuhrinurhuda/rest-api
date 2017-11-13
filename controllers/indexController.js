const User = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const create = (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    isAdmin: 'false'
  })
  .then(() => {
    res.send('success create new user')
  })
  .catch(error => {
    res.send(error)
  })
}

const signin = (req, res) => {
  User.findOne({
    where: {username: req.body.username}
  })
  .then(userData => {
    bcrypt.compare(req.body.password, userData.password).then(function(success) {
      if(success) {
        jwt.sign({
          id: userData.id,
          username: userData.username,
          isAdmin: userData.isAdmin
        }, process.env.SECRET_KEY, (err, token) => {
          if(err) res.status(401).send(err)
          else res.send({
            msg: 'Login success',
            token: token
          })
        })
      } else {
        res.send('Login failed')
      }
    });
  })
  .catch(error => {
    res.send(error)
  })
}

module.exports = {
  create, signin
};
