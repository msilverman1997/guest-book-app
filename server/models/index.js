const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: dbConfig.DB, 
    username: dbConfig.USER, 
    password: dbConfig.PASSWORD,
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.guests = require('./guest.js')(sequelize, Sequelize);

module.exports = db;