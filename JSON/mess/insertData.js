const fsp = require('fs').promises;
const sqlite3 = require('sqlite3').verbose();

async function insert() {
    const rawData = await fsp.readFile('./restaurant.json');
    const restaurantArray = (JSON.parse(String(rawData)));
    const db = new sqlite3.Database('./restaurant2.sqlite');
    try {
        db.serialize(function () {
            let menuId = 1
            for (
                let i = 0; i < restaurantArray.length; i++) {
                const currentRestaurant = restaurantArray[i];
                let stmt;
                try {
                    stmt = db.prepare(`INSERT INTO RESTAURANT (name, imagelink) VALUES (?, ?)`);
                    stmt.run(currentRestaurant.name, currentRestaurant.image);
                } finally {
                    db.close();
                    console.log('insert restaurants complete - connection closed');
                }
                for (j=0; j<currentRestaurant.menus.length; j++){
                    const currentMenu = currentRestaurant.menus[j];
                    try{stmt = db.prepare(`INSERT INTO MENU (title, restaurant_id) VALUES (?, ?)`);
                    stmt.run(currentMenu.title, i+1);  
                    } finally {
                        db.close();
                        console.log('insert menu complete - connection closed');
                    }
                for (a=0; a<currentMenu.items.length; a++){
                    const currentMenuItem = currentMenu.items[a];
                    try {stmt = db.prepare(`INSERT INTO MENUITEM (name, price, menu_id) VALUES (?, ?, ?)`);
                    stmt.run(currentMenuItem.name, currentMenuItem.price, menuId);
                } finally {
                    db.close();
                    console.log('insert menu complete - connection closed');
                }
                }
                menuId++;
                }
            }
        })
    } finally {
        db.close();
        console.log('inserts complete - connection closed');
    }
}


insert();