'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'admin',
      password: '$2a$10$mlkHMfHi.993iSWgtlzuVeLYVIAyHhWSRh.i.LEjfNYIA1TzS0Enq',
      isAdmin: true
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
