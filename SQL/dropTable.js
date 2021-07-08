const sqlite3 = require('sqlite3').verbose();
/**
 * This code inserts some rows in the tables for the Restaurants assignment
 */
function drop() {
    // connect to a database named restaurants.sqlite
    const db = new sqlite3.Database('./restaurant.sqlite');
    try {
        db.serialize(function () { // serialize means execute one statement at a time
            console.log('deleting tables');
            let stmt;
            // insert a row into the RESTAURANTS table
            try {
                // for security reasons - very important to use a 
                // prepared statement here
                stmt = db.prepare('DROP TABLE restaurant');
                stmt.run();
            } finally {
                // IMPORTANT! Close the statement
                stmt.finalize();
            }   
        });
    } finally {
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
        console.log('table drop complete - connection closed');
    }
}
module.exports = drop;
// local testing (comment out if running tests from jest)
drop();