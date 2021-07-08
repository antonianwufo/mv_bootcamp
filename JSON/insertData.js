const sqlite3 = require('sqlite3').verbose();
const fsp = require('fs').promises; // Node.js file system module with promises

async function load() { // returns a promise of an array
    const rawData = await fsp.readFile('./restaurant.json');
    const restaurantsArray = (JSON.parse(String(rawData)));
    return restaurantsArray;
}
function insert(restaurantsArray) {
    const db = new sqlite3.Database('./restaurant.sqlite');

    try {
        db.serialize(function () {

            let menuCounter = 1;

            for (let i = 0; i < restaurantsArray.length; i++) {

                const currentRestaurant = restaurantsArray[i];

                let stmt;

                try {
                    stmt = db.prepare(`INSERT INTO RESTAURANT (name, imagelink) VALUES (?, ?)`);
                    stmt.run(currentRestaurant.name, currentRestaurant.image);
                } finally {
                    stmt.finalize();
                }

                for (j = 0; j < currentRestaurant.menus.length; j++) {
                    const currentMenu = currentRestaurant.menus[j];
                    try {
                        stmt = db.prepare(`INSERT INTO MENU (title, restaurant_id) VALUES (?, ?)`);
                        stmt.run(currentMenu.title, i + 1);
                    } finally {
                        stmt.finalize();
                    }

                    for (k = 0; k < currentMenu.items.length; k++) {
                        const currentMenuItem = currentMenu.items[k];

                        try {
                            stmt = db.prepare(`INSERT INTO MENUITEM (name, price, menu_id) VALUES (?, ?, ?)`);
                            stmt.run(currentMenuItem.name, currentMenuItem.price, menuCounter);
                        } finally {
                            stmt.finalize();
                        }
                    }

                    menuCounter++;
                }
            }
        });
    } finally {
        db.close();
        console.log('database closed');
    }
}
module.exports = { load, insert }

// local testing (comment out if running tests from jest)
console.log('starting populate');
load()
    .then(restaurantsArray => {
        console.log("data loaded");
        insert(restaurantsArray);
        console.log("inserts complete");
    })
    .catch(err => {
        console.error("data could not be loaded"+err);
    })