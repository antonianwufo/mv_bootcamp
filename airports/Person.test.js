const Person = require('./Person')

describe
(
    'Person', () => 
{
    test('Person exists', () => 
    {
        const person = new Person("Ann Jones");
        expect(person.name).toEqual("Ann Jones");
    })
    test('Has a bag', () => 
    {
        const person = new Person("Ann Jones");
        const carryOn = new Bag(15);
        person.addBag(carryOn)
        expect(person.bag.length).toBe(1);
    })
})