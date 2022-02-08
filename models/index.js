const PolicyOwner = require('./PolicyOwner');
const Policies = require('./Policies.This is not working yet');
const Homeowners = require('./Homeowners');
const Auto = require('./Auto')

// User.hasMany(Policies,{
//     foreignKey: 'owner_id'
// })

// Policies.belongsTo(User, {
//     foreignKey: 'owner_id'
// })

PolicyOwner.hasMany(Homeowners,{
    foreignKey: 'owner_id'
})

Homeowners.belongsTo(PolicyOwner, {
    foreignKey: 'owner_id'
})

PolicyOwner.hasMany(Auto, {
    foreignKey: 'owner_id'
})

Auto.belongsTo(PolicyOwner, {
    foreignKey: 'owner_id'
})


module.exports = {PolicyOwner, Policies, Homeowners, Auto}

