const {sequelize, DataTypes, Model} = require('sequelize');
const sequelize_connect = require('../sequelize_connect')
/**
 * Represents a Restaurant
 */

class Restaurants extends Model {
    // add methods here
}
Restaurants.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize: sequelize_connect,
    timestamps: false,
});

module.exports = Restaurants