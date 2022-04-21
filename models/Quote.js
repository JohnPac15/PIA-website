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
        DOB:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        occupation:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        contact_time:{
            type: DataTypes.STRING,
            allowNull: true
        },
        textarea:{
            type: DataTypes.STRING,
            allowNull: true
        }
        // year_built:{
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // dwelling_value:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // foundation:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // age_of_roof:{
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        // },
        // type_of_roof:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // type_of_siding:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // square_footage:{
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        // },
        // property_size:{
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        // },
        // Driver_name:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // DL_number:{
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        // },
        // vehicle_year:{
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        // },
        // vehicle_make:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // vehicle_model:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // VIN:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // vehicle_usage:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // lien_holder:{
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // deductible_amount:{
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        // },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'quote'
    }

)

module.exports = Quote