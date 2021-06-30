/*Super Class - pushes to Passenger and Crew*/
//const Bag = require('./Bag')
class Person {
    constructor(name, bag)
{
    if (!name, bag) 
    {
        throw new Error('Person must have a name')
    }
    this.name = name
    this.bags = []
    }
    addBag(bag)
    {
    this.bags.push(bag)
    }
}

const person = new Person("me")
console.log(person)

module.exports = Person