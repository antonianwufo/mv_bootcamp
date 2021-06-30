// const Person = require('./Person')
const Bag = require('./Bag')
// const Passenger = require('./Passenger')
// const Airport = require('./Airport')

/*Tests whether a bag has a weight*/
describe
(
    'Bag', () =>
{
    test('Has a weight', () => 
    {
        const bag = new Bag(13);
        expect(bag.weight).toBe(13)
    })
/*Throws an error if a weight has not been defined*/
    test('Does not have a weight', () =>
    {
        expect(() => new Bag()).toThrowError('bag must have a weight')
    })
})