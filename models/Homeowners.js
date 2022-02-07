const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Homeowners extends Model{}

Homeowners.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        company_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        aunnal_premiun:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        policy_number:{
            type: DataTypes.STRING,
            allowNull: false
        },
        expiration_date:{
            type: DataTypes.DATE(6),
            allowNull: false
        },
        property_address:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        owner_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'homeowners_policy'
    }
)

module.exports = Homeowners