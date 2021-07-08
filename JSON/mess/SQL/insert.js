const sqlite3 = require('sqlite3').verbose();
/**
 * This code inserts some rows in the tables for the Restaurants assignment
 */
function insert() {
    // connect to a database named restaurants.sqlite
    const db = new sqlite3.Database('./restaurant.sqlite');
    try {
        db.serialize(function () { // serialize means execute one statement at a time
            console.log('inserting some data');
            let stmt;
            // insert a row into the RESTAURANTS table
            try {
                // for security reasons - very important to use a 
                // prepared statement here
                stmt = db.prepare(`INSERT INTO RESTAURANT (name, imagelink) VALUES (?, ?)`);
                stmt.run("Banyan on the Thames", "x");
                stmt.run("Roku", "x");
            } finally {
                // IMPORTANT! Close the statement
                stmt.finalize();
            }
            // insert a row into the MENU table
            try {
                // TODO
                stmt = db.prepare(`INSERT INTO MENU (title, restaurant_id) VALUES (?, ?)`);
                stmt.run("Al Fresco",1);
                stmt.run("Dinner",2);
                stmt.run("Brunch",2);
            } finally {
                // IMPORTANT! Close the statement
                stmt.finalize();
            }
            // insert a row into the MENUITEMS table
            try {
                // TODO
                stmt = db.prepare(`INSERT INTO MENUITEM (name, price, menu_id) VALUES (?, ?, ?)`);
                stmt.run("Pasta al Pomodoro", 20.00, 1);
                stmt.run("Sweet chilli vegan 'chicken'", 25.00, 2);
                stmt.run("Edamame", 7.00, 2);
                stmt.run("Roasted 'Tofurkey'", 35.00, 2);
                stmt.run("Lemon and herb skewers (vg)", 15.00, 2);
                stmt.run("Coconut & banana pancakes (vg)", 9.00, 3);
            } finally {
                // IMPORTANT! Close the statement
                stmt.finalize();
            }
        });
    } finally {
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
        console.log('table insert complete - connection closed');
    }
}
module.exports = insert;
// local testing (comment out if running tests from jest)
insert();