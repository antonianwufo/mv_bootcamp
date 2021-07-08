const DockingStation = require('../src/DockingStation')
const Scooter = require('../src/Scooter')

describe
(
    'Docking Station', () =>
{
    test.only('Station has an ID', () =>
    {
    expect(() => new dockId()).toThrowError('Docking station must have an ID')    
    })
    test('Has space', () => 
    {
    const scooter = new Scooter(111);
    expect(DockingStation.hasSpace()).toBeTruthy();
    })
    test('Has is full', () => 
    {
    const scooter = new Scooter(111);
    expect(DockingStation.hasSpace()).toBeFalsy();
    })
})