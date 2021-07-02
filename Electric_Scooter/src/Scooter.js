class Scooter 
{
    constructor(id) 
    {
        if (!id) 
        {
            throw new Error('Scooter must have an ID')
        }
        this.id = id
        this.stationId != ''
        this.isUnavailable = false
    }
addStationId(stationId){
    this.stationId.push(stationId)
}

    reportBroken() 
    {
        this.isUnavailable = true
    }
    charge() {
        if (!this.isUnavailable)
        {
            return true
        } else 
        {
            return false
        }
    }
}

// const Scooter = new Scooter(111)
// console.log(Scooter.id)

module.exports = Scooter