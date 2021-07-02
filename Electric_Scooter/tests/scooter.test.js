const Scooter = require('../src/Scooter')

describe
(
    'Scooter', () => 
{
    test('Scooter exists', () => 
    {
        expect(() => new Scooter()).toThrowError('Scooter must have an ID')
    })
    test('Scooter exists', () => 
    {
        const scooter = new Scooter(111);
        expect(scooter.id).toEqual(111);
    })
    // test('Check scooter battery level', () => 
    // {
    //     const scooter = new Scooter(78);
    //     expect(scooter.battLvl).toEqual(78);
    // })   
    // test('Scooter is fully charged', () => 
    // {
    //     const scooter = new Scooter(100);
    //     expect(scooter.battLvl).toEqual(100);
    // })   
    test('Scooter is working', () => 
    {
        const scooter = new Scooter(111);
        expect(scooter.charge()).toBeTruthy();
    })   
    // test('Scooter is not available for hire', () => 
    // {
    //     const scooter = new Scooter(111);
    //     expect(scooter.reportBroken()).toBeTruthy();
    // })   
    // test('Scooter is available for hire', () => 
    // {
    //     const scooter = new Scooter("Available");
    //     expect(scooter.status).toEqual("Available");
    // }) 
    test('Scooter is docked', () => 
    {
        const scooter = new Scooter(111);
        expect(scooter.stationId).toEqual("Unavailable");
    })   
})
