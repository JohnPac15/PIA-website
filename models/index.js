const PolicyOwner = require('./Policy-Owner');
const Policies = require('./Policies.This is not working yet');
const Homeowners = require('./Homeowners');
const Auto = require('./Auto')

// PolicyOwner.hasMany(Policies,{
//     foreignKey: 'owner_id'
// })

// Policies.belongsTo(PolicyOwner, {
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

