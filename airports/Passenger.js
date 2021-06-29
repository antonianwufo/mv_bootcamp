class Passenger {
    constructor(name)
{
    if (!name) 
    {
        throw new Error('passenger must have a name')
    }
    this.name = name
    this.bags = []
    }
    addBag(bag)
    {
    this.bags.push(bag)
    }
}

//console.log(Passenger.name)

module.exports = Passenger