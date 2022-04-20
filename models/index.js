const Homeowners = require('./Homeowners');
const Auto = require('./Auto');
const PolicyOwner = require('./Policy-Owner');
const Quote = require('./Quote')


PolicyOwner.hasMany(Homeowners,{
    foreignKey: 'owner_id',
    onDelete: "CASCADE"
})

Homeowners.belongsTo(PolicyOwner, {
    foreignKey: 'owner_id',
    onDelete: "set null"
})

PolicyOwner.hasMany(Auto, {
    foreignKey: 'owner_id',
    onDelete: "CASCADE"
})

Auto.belongsTo(PolicyOwner, {
    foreignKey: 'owner_id'
})


module.exports = {PolicyOwner, Homeowners, Auto, Quote}

