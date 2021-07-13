const {sequelize, DataTypes, Model} = require('sequelize');
const sequelize_connect = require('../sequelize_connect')
/**
 * Represents a Menu item
 */
class MenuItems extends Model {

    // add methods here

}
MenuItems.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    //menu_id: DataTypes.INTEGER,
}, {
    sequelize: sequelize_connect,
    timestamps: false,
});

module.exports = MenuItems