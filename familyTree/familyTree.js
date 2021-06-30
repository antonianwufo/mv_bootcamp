
const elizabeth = {
    name: 'Elizabeth',
    parents: [],
    childOf:function () {return this.parents.map(parent => parent.name).join(' & ') || "unknown"}
}
const philip = {
        name: 'Philip',
        parents: [],
        childOf:function () {return this.parents.map(parent => parent.name).join(' & ') || "unknown"}
}
const charles = {
    name: 'Charles',
    parents: [elizabeth,philip],
    childOf:function () {return this.parents.map(parent => parent.name).join(' & ') || "unknown"}
}
const diana = {
    name: 'Diana',
    parents: [],
    childOf:function () {return this.parents.map(parent => parent.name).join(' & ') || "unknown"}
}
const harry = {
    name: 'Harry',
    parents: [charles,diana],
    childOf:function () {return this.parents.map(parent => parent.name).join(' & ') || "unknown"}
}
const meghan = {
    name: 'Meghan',
    parents: [],
    childOf:function () {return this.parents.map(parent => parent.name).join(' & ') || "unknown"}
}
const archie = {
    name: 'Archie',
    parents: [harry,meghan],
    childOf:function () {return this.parents.map(parent => parent.name).join(' & ') || "unknown"}
}


console.log(archie.childOf())
console.log(archie.parents[0].childOf())
//Problem with solution: can only determine maternal/paternal if array is defined in that order. It doesn't work for Charles above because of the order of his parents array.
module.exports = {archie, meghan, harry, diana, charles, philip, elizabeth}
