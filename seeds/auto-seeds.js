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
  {
    company_name: 'Germania',
    annual_premium: 1100,
    policy_number: '987654321',
    expiration_date: '2022-12-31',
    vehicle: 'Chevy',
    owner_id: 3,
  },
  {
    company_name: 'Travelers',
    annual_premium: 800,
    policy_number: '7654321',
    expiration_date: '2022-12-31',
    vehicle: 'BMW',
    owner_id: 3,
  },
  {
    company_name: 'State Auto',
    annual_premium: 679,
    policy_number: '987654321',
    expiration_date: '2022-12-31',
    vehicle: 'Honda',
    owner_id: 4,
  },
  {
    company_name: 'State Auto',
    annual_premium: 750,
    policy_number: '7654321',
    expiration_date: '2022-12-31',
    vehicle: 'Dodge',
    owner_id: 4,
  },
  {
    company_name: 'Progressive',
    annual_premium: 567,
    policy_number: '987654321',
    expiration_date: '2022-12-31',
    vehicle: 'Jeep',
    owner_id: 5,
  },
  {
    company_name: 'Germania',
    annual_premium: 1000,
    policy_number: '7654321',
    expiration_date: '2022-12-31',
    vehicle: 'BWM',
    owner_id: 6,
  },
  {
    company_name: 'Germania',
    annual_premium: 1001,
    policy_number: '987654321',
    expiration_date: '2022-12-31',
    vehicle: 'Chevy',
    owner_id: 6,
  },
  {
    company_name: 'Germania',
    annual_premium: 890,
    policy_number: '7654321',
    expiration_date: '2022-12-31',
    vehicle: 'Volkswagon',
    owner_id: 6,
  },
]
const seedAuto = () => Auto.bulkCreate(data, {individualHooks: true});

module.exports = seedAuto;