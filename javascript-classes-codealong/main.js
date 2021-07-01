import Pet from './Pet.js'
import Owner from './Owner.js'

let fang = new Pet('Fang', 'dog', 'woof', 'rock cakes')
let fluffy = new Pet('Fluffy', 'dog', 'growl', 'trespassers')
let nagini = new Pet('Nagini', 'snake', 'hiss', 'humans')
let crookshanks = new Pet('Crookshanks', 'cat', 'meow', 'spiders')

console.log(fang.praise())
console.log(fluffy.praise())
console.log(nagini.praise())
console.log(crookshanks.praise())

console.log(`${fang.name} says: ${fang.speak(2)}`)
console.log(`${fluffy.name} says: ${fluffy.speak(1)}`)
console.log(`${nagini.name} says: ${nagini.speak(1)}`)
console.log(`${crookshanks.name} says: ${crookshanks.speak(3)}`)

let hagrid = new Owner('Hagrid', 'Groundskeeper')
let voldemort = new Owner('Voldemort', 'Dark Lord')
let hermione = new Owner('Hermione', 'student')

hagrid.addPet(fang)
hagrid.addPet(fluffy)
voldemort.addPet(nagini)
hermione.addPet(crookshanks)

console.log(`${hagrid.name} says: ${hagrid.callPets()}`)
console.log(`${voldemort.name} says: ${voldemort.callPets()}`)
console.log(`${hermione.name} says: ${hermione.callPets()}`)