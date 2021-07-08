class Scooter 
{
    /* Sets the default constructor values */
    faultCode = 0
    stationId = 0
    battLvl = 0
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
    /* Checks whether a scooter is docked - it is passed to availability() and marked unavailable and passed to docking station
     to calculate the number of available spaces*/
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
    /* If a fault code is logged, the scooter is marked unavailable and the code passed to Maintenance*/
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
    /* If charging, the scooter is marked unavailable and charging begins */
    charge() 
    {
        if (this.battLvl != 100)
        {
            return true
        } 
        else
        {
            return false
        }
    }
    /* Should begin charging if battLvl is not 100 */
//    async charge() {
//         console.log('Starting charge');

//         await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

//         console.log('Charge complete');   
//    }  
    /* Will mark the scooter as available if fully charged, is working, and is docked */
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