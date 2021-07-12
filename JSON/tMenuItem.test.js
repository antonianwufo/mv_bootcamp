const {sequelize} = require('./sequelize');
const {Restaurant} = require('./cRestaurant');
const {Menu} = require('./cMenu');
const {MenuItem} = require('./cMenuItem')

describe('Menu item', () => {
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

    test('can create a menu item', async () => {
        await sequelize.sync({ force: true }); // recreate db
        const menuItem = await MenuItem.create({ name: 'Still water', price: 3.00 })
        expect(menuItem.id).toBe(1)
    })
})