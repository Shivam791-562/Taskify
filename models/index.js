const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Task = require('./task')(sequelize, Sequelize);

module.exports = db;
