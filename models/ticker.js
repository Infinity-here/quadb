const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Ticker = sequelize.define('Ticker', {
    name: { type: DataTypes.STRING },
    last: { type: DataTypes.STRING },
    buy: { type: DataTypes.STRING },
    sell: { type: DataTypes.STRING },
    volume: { type: DataTypes.STRING },
    base_unit: { type: DataTypes.STRING },
});

module.exports = { Ticker };
