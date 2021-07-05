const Scooter = require('../src/Scooter')

describe
(
    'Scooter', () => 
{
    test('Scooter has an ID', () => 
    {
        expect(() => new Scooter()).toThrowError('Scooter must have an ID')
    })
    test('Scooter exists', () => 
    {
        const scooter = new Scooter(111);
        expect(scooter.id).toEqual(111);
    })
    /*how can I get this to check an array?*/
    test('Check scooter battery needs charging', () => 
    {
        const scooter = new Scooter(111,[98]);
        expect(scooter.battLvl).toEqual([98]);
    })   
    test('Scooter is fully charged', () => 
    {
        const scooter = new Scooter(111,[100]);
        expect(scooter.battLvl).toEqual([100]);
    })   
    test('Function - Check scooter battery needs charging', () => 
    {
        const scooter = new Scooter(111,[98]);
        expect(scooter.charge()).toEqual("Needs charging");
    })   
    // test('Scooter is charging', async() => 
    // {
    //     const scooter = new Scooter(111,100,0,0);
    //     await scooter.charge();
    //     console.log("Test complete");
    // }) 
    test('Function - Scooter is fully charged', () => 
    {
        const scooter = new Scooter(111,[100]);
        expect(scooter.charge()).toEqual("Fully charged");
    })   
    test('Scooter is working', () => 
    {
        const scooter = new Scooter(111,[100],[0]);
        expect(scooter.reportBroken()).toBeTruthy();
    })   
    test('Scooter needs repair', () => 
    {
        const scooter = new Scooter(111,[100],[999]);
        expect(scooter.reportBroken()).toBeFalsy();
    })   
    test('Scooter is working', () => 
    {
        const scooter = new Scooter(11,[100],[0]);
        expect(scooter.reportBroken()).toBeTruthy();
    }) 
    test('Scooter is unavailable for hire', () => 
    {
        const scooter = new Scooter(111,98,999,5);
        expect(scooter.availability()).toBeFalsy();
    })   
    test('Scooter is available for hire', () => 
    {
        const scooter = new Scooter(111,100,0,0);
        expect(scooter.availability()).toBeTruthy();
    }) 
    test('Scooter is docked', () => 
    {
        const scooter = new Scooter(111,100,0,99);
        expect(scooter.isDocked()).toBeTruthy();
    })   
    test('Scooter is not docked', () => 
    {
        const scooter = new Scooter(111,100,0,0);
        expect(scooter.isDocked()).toBeFalsy();
    })  
    test('Scooter is not docked - station id', () => 
    {
        const scooter = new Scooter(111,100,0,0);
        expect(scooter.stationId).toBeFalsy();
    }) 
})
