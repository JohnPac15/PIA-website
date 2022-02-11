const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedHomeowners = require('./homeowner-seeds');
const seedAuto = require('./auto-seeds');
const { Model } = require('sequelize/types');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedAuto();
  console.log('--------------');
  await seedHomeowners();
  process.exit(0);
};


module.exports= seedAll();
