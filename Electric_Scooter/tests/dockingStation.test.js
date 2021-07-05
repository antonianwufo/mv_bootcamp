const DockingStation = require('../src/DockingStation')
const Scooter = require('../src/Scooter')

describe
(
    'Docking Station', () =>
{
    test('Station has an ID', () =>
    {
    expect(() => new DockingStation()).toThrowError('Docking station must have an ID')    
    })
    test('Has space', () => 
    {
    const scooter = new Scooter(111);
    expect(DockingStation.space()).toBeTruthy(9);
    })
    test('Has is full', () => 
    {
    const scooter = new Scooter(111);
    expect(DockingStation.space()).toBeFalsy(9);
    })
})