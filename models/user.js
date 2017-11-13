'use strict';

const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.STRING
  });

  User.beforeCreate(function(user, options) {
    const saltRounds = 10;
    return  bcrypt.hash(user.password, saltRounds).then(function(hash) {
      user.password = hash
    });
  });

  User.beforeUpdate(function(user, options) {
    const saltRounds = 10;
    return  bcrypt.hash(user.password, saltRounds).then(function(hash) {
      user.password = hash
    });
  });

  return User;
};
