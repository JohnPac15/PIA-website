const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Auto extends Model{}

Auto.init(
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
        policy_nmuber:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        expiration_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        vehicles:{
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
        modelName: 'auto_policy'
    }
)

module.exports = Auto