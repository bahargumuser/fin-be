const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize({
  storage: config.development.storage,
  dialect: config.development.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Debt = require('./debt')(sequelize, Sequelize);

module.exports = db;