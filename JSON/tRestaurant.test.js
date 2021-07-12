const {sequelize} = require('./sequelize');
const {Restaurant} = require('./cRestaurant');
const {Menu} = require('./cMenu');
const {MenuItem} = require('./cMenuItem')

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {//clears the tables of data so that tests are run in known state
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
        //async makes a function return a promise
        //await makes a function wait for a promise
    })

    test('can create a menu', async () => {
        await sequelize.sync({ force: true }); // recreate db
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(restaurant.id).toBe(1)
    })

    test('can create a restaurant linked to a menu and menu items', async () => {
        await sequelize.sync({ force: true }); // recreate db
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(restaurant.id).toBe(1)
        const menu = await Menu.create({title: 'set 1'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        const items = await MenuItem.create({name: 'egg', price: 2.00});
        await menus[0].addItem(items);
        const menuItem = await menus[0].getItems();

        expect(menuItem.length).toBe(1);

        expect(menus[0].title).toBe('set 1');
    })
})