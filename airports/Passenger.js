const Person = require('./Person')
class Passenger extends Person
{
    constructor(id, name) {
        this.id = id
        super(name)
     }
//     addPerson(name) {
//         this.person.push(name)
//     }
}

// const passenger = new Passenger()
// console.log(passenger)

module.exports = Passenger