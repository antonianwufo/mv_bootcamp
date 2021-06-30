class Crew {
    constructor(id)
{
    if (!id) 
    {
        throw new Error('Crew must have an id')
    }
    this.id = id
    this.name = []
    }
    addPerson(name)
    {
    this.person.push(name)
    }
}

const crew =  new Crew(1123)
console.log(crew)

module.exports = Crew