const Airport = require('./Airport')

describe
(
    'Airport', () => 
{
    // test('Airport must have an name', () =>
    // {
    //     expect(() => new Airport()).toThrowError('Airport must have an name');
    // })
    test('Airport exists', () => 
    {
        const airport = new Airport("Heathrow","London",5,7);
        expect(airport.name).toEqual("Heathrow","London",5,7);
    })
})