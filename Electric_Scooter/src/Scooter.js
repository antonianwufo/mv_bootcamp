class Scooter 
{
    faultCode = 0
    stationId = 0
    faultCode = 0
    constructor(id, battLvl, faultCode, stationId) 
    {
        if (!id) 
        {
            throw new Error('Scooter must have an ID')
        }
        this.id = id
        this.stationId = stationId
        this.battLvl = battLvl
        this.faultCode = faultCode
    }
    isDocked()
    {//console.log(Scooter.stationId)
        if (this.stationId != 0)
        {
            return true
        } else
        {
            return false
        }
    }
    reportBroken() 
    {//console.log(Scooter.faultCode)
        if (this.faultCode != 0)
        {
            return false
        } else
        {
            return true
        }
    }
    charge() 
    {
        if (this.battLvl != 100)
        {
            return "Needs charging"
        } 
        else
        {
            return "Fully charged"
        }
    }
//    async charge() {
//         // console.log('Starting charge');

//         await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

//         // console.log('Charge complete');   
//    }    
    availability() 
    {
        if (this.battLvl != 100 || this.faultCode != 0 || this.stationId != 0) 
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