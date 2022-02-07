const User = require('./User');
const Policies = require('./Policies.This is not working yet');
const Homeowners = require('./Homeowners');
const Auto = require('./Auto')

// User.hasMany(Policies,{
//     foreignKey: 'owner_id'
// })

// Policies.belongsTo(User, {
//     foreignKey: 'owner_id'
// })

User.hasMany(Homeowners,{
    foreignKey: 'owner_id'
})

Homeowners.belongsTo(User, {
    foreignKey: 'owner_id'
})

User.hasMany(Auto, {
    foreignKey: 'owner_id'
})

Auto.belongsTo(User, {
    foreignKey: 'owner_id'
})


module.exports = {User, Policies, Homeowners, Auto}

