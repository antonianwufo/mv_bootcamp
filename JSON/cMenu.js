const {sequelize, DataTypes, Model} = require('./sequelize_index');

/**
 * Represents a menu
 */
class Menu extends Model {

    // add methods here

}
Menu.init({
    title: DataTypes.STRING,
    restaurant_id: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Menu
};