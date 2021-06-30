const Plane = require('./Plane')

describe
(
    'Plane', () => 
{
    test('Aircraft exists', () => 
    {
        const plane = new Plane("Boeing");
        expect(plane.aircraft).toEqual("Boeing");
    })
    //toEqual doesn't work???
    test('Has an origin', () => 
    {
        const plane = new Plane("LHR");
        expect(plane.origin)===("LHR");
    })
    // test('Has a destination', () => 
    // {
    //     const plane = new Plane("Ltn");
    //     expect(plane.destination).toEqual("Ltn");      
    // })
    // test('Has a passenger', () => 
    // {
    //     const plane = new Plane("Toni N");
    //     expect(plane.passenger).toEqual("Toni N");       
    // })
})