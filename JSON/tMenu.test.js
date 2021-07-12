const {sequelize} = require('./sequelize');
const {Restaurant} = require('./cRestaurant');
const {Menu} = require('./cMenu');
const {MenuItem} = require('./cMenuItem')

describe('Menu', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {//clears the tables of data, before all tests in suite are run, so that tests are run in known state
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
        //async makes a function return a promise
        //await makes a function wait for a promise
    })

    test('can create a menu', async () => {
        await sequelize.sync({ force: true }); // recreate db
        const menu = await Menu.create({ title: 'Drinks' })
        expect(menu.id).toBe(1)
    })
    
    test('can create a menu linked to menu item', async () => {
        const menu = await Menu.create({ title: 'set 1' });
        const items = await MenuItem.create({ name: 'egg', price: 2.00 });
        await menu[0].addItem(items);
        const menuItem = await menus[0].getItems();

        expect(menuItem.length).toBe(1);

        expect(menus[0].title).toBe('set 1');
    })
})