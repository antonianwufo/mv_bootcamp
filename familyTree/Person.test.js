const people = require('./familyTree')

//Prove tree has members
describe('familyTree objects', () => {

    test('Is a family member', () => {
    expect(people.archie.name).toEqual("Archie")
    })
    test('Is a family member', () => {
    expect(people.meghan.name).toEqual("Meghan")
    })
//Prove members have a parent
    test('Has a parent', () => {
    expect(people.archie.parents).toEqual[0]
    })
})
