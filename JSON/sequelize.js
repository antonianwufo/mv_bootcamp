const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurant-seq.sqlite',
    freezeTableName: true
});
 module.exports={sequelize, DataTypes, Model};