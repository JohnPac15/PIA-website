const sequelize = require('../config/connection');
const { PolicyOwner } = require('../models');

const userdata = [
  {
    first_name: 'Robert',
    last_name: 'Clarady',
    email: 'robert@pia.com',
    username: 'robert',
    password: 'password123',
    policy_owner: false,
    admin: true
  },
  {
    first_name: 'Tom',
    last_name: 'Thumb',
    username: 'tom',
    email: 'tom@pia.com',
    password: 'password123',
    policy_owner: true,
    admin: false
  },
]
const seedUsers = () => PolicyOwner.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;