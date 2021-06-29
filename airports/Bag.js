class Bag {
    constructor(weight) {
        if (!weight) {
            throw new Error('bag must have a weight')
        }
        this.weight = weight
    }
}


//console.log(bag.weight)





module.exports = Bag