const User = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const findAll = (req, res) => {
  User.findAll()
  .then(usersData => {
    res.send(usersData)
  })
  .catch(error => {
    res.send(error)
  })
}

const findById = (req, res) => {
  User.findById(req.params.id)
  .then(userData => {
    res.send(userData)
  })
  .catch(error => {
    res.send(error)
  })
}

const create = (req, res) => {
  User.create(req.body)
  .then(() => {
    res.send('success create new user')
  })
  .catch(error => {
    res.send(error)
  })
}

const destroy = (req, res) => {
  User.destroy({where: req.params})
  .then(() => {
    res.send('success delete user')
  })
  .catch(error => {
    res.send(error)
  })
}

const update = (req, res) => {
  User.update(req.body, {where: req.params})
  .then(() => {
    res.send('success update user')
  })
  .catch(error => {
    res.send(error)
  })
}

const signin = (req, res) => {
  console.log('--> masuk findOne');
  console.log(req.body);
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
        }, 'hacktiv8', (err, token) => {
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
  findAll, findById, create, destroy, update, signin
};
