const jwt = require('jsonwebtoken');
require('dotenv').config()

const isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
    if(err) {
      res.status(401).send(err)
    } else {
      req.verifyUser = decoded
      next()
    }
  })
}

const isAdmin = (req, res, next) => {
  if(req.verifyUser.isAdmin) {
    next()
  } else {
    res.send('only Admin can access')
  }
}

const isUser = (req, res, next) => {
  if(req.verifyUser.isAdmin || req.verifyUser.id == req.params.id) {
    next()
  } else {
    res.send('wrong user')
  }
}

module.exports = {
  isLogin, isAdmin, isUser
};
