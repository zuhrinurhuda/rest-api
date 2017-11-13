const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  jwt.sign({
    id: usersController.id,
    username: usersController.username,
    isAdmin: usersController.isAdmin
  }, 'hacktiv8', (err, token) => {
    if(err) res.status(401).send(err)
    else res.send({
      msg: 'Login success',
      token: token
    })
  })
}


module.exports = isAdmin;
