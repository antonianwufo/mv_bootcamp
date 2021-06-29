const Bag = require('./Bag')
const Passenger = require('./Passenger')

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
/*Tests whether a passenger has a name*/
describe
(
    'Passenger', () => 
{
    test('Is a passenger', () => 
    {
        const passenger = new Passenger('Ron');
        expect(passenger.name).toEqual('Ron');
    })
    test('Is not a passenger', () =>
    {
        expect(() => new Passenger()).toThrowError('passenger must have a name');
    })
/*Tests whether a passenger has a bag*/
    test('Has a bag', () => 
    {
        const passenger = new Passenger({name: 'Ron'})
        const carryOn = new Bag(15)
        const checkedLuggage = new Bag(32)
        passenger.addBag(carryOn)
        passenger.addBag(checkedLuggage)
        expect(passenger.bags.length).toBe(2)
    })
})