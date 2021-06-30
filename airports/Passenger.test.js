// const Person = require('./Person')
// const Bag = require('./Bag')
const Passenger = require('./Passenger')

/*Tests whether a passenger has a name*/
describe
(
    'Passenger', () => 
{
    test('Is a passenger', () => 
    {
        const passenger = new Passenger(1123);
        expect(passenger.id).toBe(1123);
    })
    test('Is not a passenger', () =>
    {
        expect(() => new Passenger()).toThrowError('Passenger must have an id');
    })
})

        // const passenger = new Person("Ann Jones");
        //const passenger = new Bag(1);
        // expect(person.name).toEqual("Ann Jones");
        //expect(bag.weight).toBe(1);
/*Checks how many bags a passenger has*/
    // test('Has a bag', () => 
    // {
    //     const passenger = new Passenger({id:1123})
    //     const carryOn = new Bag(15)
    //     const checkedLuggage = new Bag(32)
    //     const checkedLuggage2 = new Bag(23)
    //     passenger.addBag(carryOn)
    //     passenger.addBag(checkedLuggage)
    //     passenger.addBag(checkedLuggage2)
    //     expect(passenger.bags.length).toBe(3)
    // })