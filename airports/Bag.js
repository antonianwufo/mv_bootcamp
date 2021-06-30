class Bag 
//extends Person
{
    constructor(weight) 
    {
        if (!weight) 
        {
            throw new Error('bag must have a weight')
        }
        this.weight = weight
    }
}

// const bag = new Bag(10)
// console.log(bag.weight)

module.exports = Bag