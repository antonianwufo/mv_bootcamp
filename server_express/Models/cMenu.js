const {sequelize, DataTypes, Model} = require('sequelize');
const sequelize_connect = require('../sequelize_connect')
/**
 * Represents a menu
 */

class Menus extends Model {
    // add methods here
}
Menus.init({
    title: DataTypes.STRING,
    //restaurant_id: DataTypes.STRING,
}, {
    sequelize: sequelize_connect,
    timestamps: false,
});

module.exports = Menus