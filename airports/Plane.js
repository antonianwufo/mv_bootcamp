const Passenger = require('./Passenger')
const Crew = require('./Crew')
class Plane 
{
    constructor(aircraft) 
    {
        this.aircraft = aircraft
        this.flightCrew = []
        this.passenger = []
    }
    loadPassenger(person)  
    {
        if(person instanceof Passenger)
        {this.passengers.push(person)}
        else{this.flightCrew.push(person)}
    }
    setDestination(destination) {
        this.destination = destination;
    }
    setOrigin(origin) {
        this.origin = origin;
}

// const plane = new Plane("Boeing","LHR","LDN","Toni N")
// console.log(plane)

module.exports = Plane