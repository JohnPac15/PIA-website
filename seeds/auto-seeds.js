const sequelize = require('../config/connection');
const { Auto } = require('../models');

const data = [
  {
    company_name: 'General',
    annual_premium: 399,
    policy_number: '987654321',
    expiration_date: '2022-12-31',
    vehicle: 'Ford',
    owner_id: 1,
  },
  {
    company_name: 'State Farm',
    annual_premium: 750,
    policy_number: '7654321',
    expiration_date: '2022-12-31',
    vehicle: 'Dodge',
    owner_id: 2,
  },
]
const seedAuto = () => Auto.bulkCreate(data, {individualHooks: true});

module.exports = seedAuto;