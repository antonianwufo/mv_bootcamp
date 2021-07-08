const {sequelize, DataTypes, Model} = require('./sequelize_index');

/**
 * Represents a Restaurant
 */
class Restaurant extends Model {

    // add methods here

}
Restaurant.init({
    name: DataTypes.STRING,
    imagelink: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Restaurant
};