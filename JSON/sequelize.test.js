const {sequelize} = require('./sequelize');
const {Restaurant} = require('./Restaurant')

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
        //async makes a function return a promise
        //await makes a function wait for a promise
    })

    test('can create a restaurant', async () => {
        await sequelize.sync({ force: true }); // recreate db
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(restaurant.id).toBe(1)
    })
})