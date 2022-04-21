const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quote extends Model{}

Quote.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        street_address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        state:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip_code:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone_number:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // house:{
        //     references:{
        //         model: 'house',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'quote'
    }

)

module.exports = Quote