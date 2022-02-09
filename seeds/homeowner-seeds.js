const sequelize = require('../config/connection');
const { Homeowners } = require('../models');

const data = [
  {
    company_name: 'Progressive',
    annual_premium: 599,
    policy_number: '123456789',
    expiration_date: '2022-12-31',
    property_address: '123 Main St',
    owner_id: 1,
  },
  {
    company_name: 'GEICO',
    annual_premium: 800,
    policy_number: '0123456',
    expiration_date: '2022-12-31',
    property_address: '456 Main St',
    owner_id: 2,
  },
]
const seedHomeowners = () => Homeowners.bulkCreate(data, {individualHooks: true});

module.exports = seedHomeowners;