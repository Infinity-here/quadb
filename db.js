const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hodlinfo', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
