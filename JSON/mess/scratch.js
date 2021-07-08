        // try {
        //     db.serialize(function () { 
        //        try{stmt = db.prepare(`INSERT INTO MENU (title, restaurant_id) VALUES (?, ?)`);
        //             const menus = currentRestaurant.menus;
        //             for (j=0; j<menus.length; j++){
        //             const currentMenu = menus[j];}
        //         } finally {
        //             db.close();
        //             console.log('insert menu complete - connection closed');
        //         }
        // try {
        //     db.serialize(function () { 
        //     try{stmt = db.prepare(`INSERT INTO MENUITEM (name, price, menu_id) VALUES (?, ?, ?)`);
        //             const currentMenuItems = currentMenu.items
        //                     
        //         } finally {
        //                     db.close();
        //                     console.log('insert menu items complete - connection closed');
        //         }
        //     }

    }   catch (error) {
        console.error('problem reading the file'+error);