const Passenger = require('./Passenger')
class Airport 
{
    constructor(name, location, terminal, gate) 
    {
        if (name != undefined) 
        {
            this.name = name
        }
        if (location != undefined) 
        {
            this.location = location
        }
        if (terminal != undefined) 
        {
            this.terminal = terminal
        }
        if (gate != undefined) 
        {
            this.gate = gate
        }
    }
    addPlane(plane) 
    {
        plane.setOrigin(this.name)
        this.planes.push(plane)
    }
}

// const airport = new Airport("Heathrow","London",5,7)
// const airport = new Airport()
// console.log(airport)

module.exports = Airport