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
    company_name: 'Nationwide',
    annual_premium: 13000,
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
  {
    company_name: 'Progressive',
    annual_premium: 759,
    policy_number: '123456789',
    expiration_date: '2022-12-31',
    property_address: '123 Main St',
    owner_id: 3,
  },
  {
    company_name: 'GEICO',
    annual_premium: 2100,
    policy_number: '0123456',
    expiration_date: '2022-12-31',
    property_address: '456 Main St',
    owner_id: 3,
  },
  {
    company_name: 'GEICO',
    annual_premium: 1900,
    policy_number: '0123456',
    expiration_date: '2022-12-31',
    property_address: '456 Main St',
    owner_id: 4,
  },
  {
    company_name: 'Progressive',
    annual_premium: 20,
    policy_number: '123456789',
    expiration_date: '2022-12-31',
    property_address: '123 Main St',
    owner_id: 5,
  },
  {
    company_name: 'GEICO',
    annual_premium: 900,
    policy_number: '0123456',
    expiration_date: '2022-12-31',
    property_address: '456 Main St',
    owner_id: 6,
  },
  {
    company_name: 'Germania',
    annual_premium: 1200,
    policy_number: '0123456',
    expiration_date: '2022-12-31',
    property_address: '456 Main St',
    owner_id: 6,
  },
  {
    company_name: 'Travelers',
    annual_premium: 380,
    policy_number: '123456789',
    expiration_date: '2022-12-31',
    property_address: '123 Main St',
    owner_id: 6,
  },
]
const seedHomeowners = () => Homeowners.bulkCreate(data, {individualHooks: true});

module.exports = seedHomeowners;