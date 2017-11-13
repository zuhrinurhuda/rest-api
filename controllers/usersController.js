const User = require('../models').User

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
  console.log(req.params);
  console.log(req.body);
  User.update(req.body, {where: {id: req.params.id}, individualHooks: true})
  .then(() => {
    res.send('success update user')
  })
  .catch(error => {
    res.send(error)
  })
}

module.exports = {
  findAll, findById, create, destroy, update
};
