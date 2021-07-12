const {sequelize, DataTypes, Model} = require('./sequelize');

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
    freezeTableName: true,
});


module.exports = {
    Menu
};