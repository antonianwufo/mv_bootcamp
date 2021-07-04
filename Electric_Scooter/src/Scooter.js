class Scooter 
{
    constructor(id, battLvl, faultCode) 
    {
        if (!id) 
        {
            throw new Error('Scooter must have an ID')
        }
        this.id = id
        this.stationId = false
        this.battLvl = battLvl
        this.isFaultCode = faultCode
    }
// addStationId(stationId){
//     this.stationId.push(stationId)
// }
    isDocked()
    {
        if (this.isStationId > 0)
        {
            return false
        } else
        {
            return true
        }
    }
    reportBroken() 
    {
        if (this.isFaultCode != 0)
        {
            return false
        } else
        {
            return true
        }
    }
    charge() 
    {
        if (this.battLvl = 100)
        {
            return "Fully charged"
        } 
        else
        {
            return "Needs charging"
        }
    }
    availability() 
    {
        if (this.battLvl !== 100 || this.faultCode !== 0) 
        {
            return false
        } 
        else
        {
            return true
        }
    }
}

//const Scooter = new Scooter(111,8)
//console.log(Scooter.battLvl)

module.exports = Scooter