const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Menu extends Model {}
  Menu.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      foodGroup: {      
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
      },
      food: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
         model: 'user',
         key: 'id',
        }
      }
     },
    {
        sequelize,
        timestamps: false,
        modelName: 'menu',    
        freezeTableName: true,
    }
  )
  module.exports = Menu;