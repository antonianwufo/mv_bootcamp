const people = require('./familyTree')

describe('familyTree objects', () => {

    test('Is a family member', () => {
    expect(people.archie.name).toEqual("Archie")
    })
    test('Is a family member', () => {
    expect(people.meghan.name).toEqual("Meghan")
    })
    test('Has an age', () => {
    expect(people.age).objectContaining ({35})
    })
})
