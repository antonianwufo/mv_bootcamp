const {sequelize, DataTypes, Model} = require('./sequelize');

/**
 * Represents a Menu item
 */
class MenuItem extends Model {

    // add methods here

}
MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
});

module.exports = {
    MenuItem
};