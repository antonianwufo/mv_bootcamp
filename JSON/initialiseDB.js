const sqlite3 = require('sqlite3').verbose();
/**
 * This code creates the tables for the Restaurants assignment
 */
function initialise() {
    // connect to a database named restaurants.sqlite
    const db = new sqlite3.Database('./restaurant-seq.sqlite');
    freezeTableName: true;
    try {
        db.serialize(function () { // serialize means execute one statement at a time
            console.log('starting table creation');
            // delete tables if they already exist
            db.run("DROP TABLE IF EXISTS RESTAURANT");
            db.run("DROP TABLE IF EXISTS MENU");
            db.run("DROP TABLE IF EXISTS MENUITEM");
            // TODO - do the same for the other tables
            // create new, empty tables with specific columns and column types
            db.run("CREATE TABLE RESTAURANT (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)");
            db.run("CREATE TABLE MENU(id Integer Primary Key Autoincrement, title Text, restaurant_id Integer,FOREIGN KEY (restaurant_id) REFERENCES restaurant(id))");
            db.run("CREATE TABLE MENUITEM(id Integer Primary Key Autoincrement, name String, price Integer, menu_id Integer, FOREIGN KEY (menu_id) REFERENCES menu(id));");
            // TODO - do the same for the other tables
        });
    } finally {
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
        console.log('table creation complete - connection closed');
    }
}
module.exports = initialise;
// local testing (comment out if running tests from jest)
initialise();