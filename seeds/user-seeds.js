const sequelize = require('../config/connection');
const { PolicyOwner } = require('../models');

const userdata = [
  {
    first_name: 'Robert',
    last_name: 'Clarady',
    username: 'robert',
    password: 'password123',
    policy_owner: false,
    admin: true
  },
  {
    first_name: 'Tom',
    last_name: 'Thumb',
    username: 'tom',
    password: 'password123',
    policy_owner: true,
    admin: false
  },
]
const seedUsers = () => PolicyOwner.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;