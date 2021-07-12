const {sequelize, DataTypes, Model} = require('./sequelize');
const {Menu} = require('./cMenu')
const {MenuItem} = require('./cMenuItem')
/**
 * Represents a Restaurant
 */

class Restaurant extends Model {
    // add methods here
}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
});
Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})
Menu.hasMany(MenuItem, {as: 'items', foreignKey: 'menu_id'});
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'});
module.exports = {
    Restaurant, Menu, MenuItem
};