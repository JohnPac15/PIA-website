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
  {
    first_name: 'Timmy',
    last_name: 'Turner',
    email: 'tim@email.com',
    username: 'timmy',
    password: 'tttttt',
    policy_owner: false,
    admin: true
  },
  {
    first_name: 'Kate',
    last_name: 'Wilson',
    username: 'Kate',
    email: 'Kate@email.com',
    password: 'kkkkkk',
    policy_owner: true,
    admin: false
  },
  {
    first_name: 'Ethan',
    last_name: 'Jackson',
    email: 'ethan@email.com',
    username: 'ethan',
    password: 'eeeeee',
    policy_owner: false,
    admin: true
  },
  {
    first_name: 'Stella',
    last_name: 'Clarkson',
    username: 'Stelly',
    email: 'stelly@email.com',
    password: 'ssssss',
    policy_owner: true,
    admin: true
  },
]
const seedUsers = () => PolicyOwner.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;