class DockingStation 
{
    stationId = 0
    dockId = 1
    space = 10
    
        static dockId = []
        
        constructor(stationId, dockId, space)
    {
        if (!stationId) 
        {
            throw new Error('Docking station must have an ID')
        }  
        stationId = stationId
        this.dockId = dockId
        this.space = space
    }
    noOfSpace()
    {
        space - 
    }
    hasSpace()
    {
        if (this.noOfspace() != 10)
            {
                return false
            }
            else{
                return true
            }
    }
}
