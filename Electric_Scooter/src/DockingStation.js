//const Scooter = require("./Scooter")

class DockingStation 
{
    /* Sets the default constructor values */
    stationId = 0
    dockId = 0
    space = 10
    
        //static dockId = []
        
        constructor(dockId, stationId, space)
    {
        if (!dockId) 
        {
            throw new Error('Docking station must have an ID')
        }  
        stationId = stationId
        this.dockId = dockId
        this.space = space
    }
    /* Calculates the number of available spaces for the Station Allocator - should count the station id from the scooter
    and minus from the default 10 */
    // hasSpace()
    // {
    //     if (this.space() != 10)
    //         {
    //             return false
    //         }
    //         else{
    //             return true
    //         }
    // }
}
