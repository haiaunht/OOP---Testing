Let's get some practice with writing and working with JavaScript classes. As we know, we can create a `class` to act as a reusable blueprint of what an object should look like: its state (attributes) and behavior (methods). We can use objects to store and keep track of any combined state and behavior that makes sense to group together in our application. And what better to keep track of than furbabies??

## Getting Started

```no-highlight
et get javascript-classes-codealong
cd javascript-classes-codealong
code .
```

## What defines a Pet?

The animals of the wizarding world are vast. Let's say we wanted to define some of them using _object literals_. This might look like the below:

```javascript
let fang = {
  name: 'Fang',
  species: 'dog',
  sound: 'woof',
  favoriteSnack: 'rock cakes',
  owner: 'Hagrid'
}

let fluffy = {
  name: 'Fluffy',
  species: 'dog',
  sound: 'growl',
  favoriteSnack: 'trespassers',
  owner: 'Hagrid'
}

let nagini = {
  name: 'Nagini',
  species: 'snake',
  sound: 'hiss',
  favoriteSnack: 'humans',
  owner: 'Voldemort'
}

let crookshanks = {
  name: 'Crookshanks',
  species: 'cat',
  sound: 'meow',
  favoriteSnack: 'spiders',
  owner: 'Hermione'
}
```

However, we're seeing a lot of repetition in this code, and it's possible that we would want to introduce some behavior, or methods, that apply to all pets! At this point, we may realize that we can begin to utilize JavaScript `class`es to create a blueprint for what a `Pet` should look like.

Let's start by defining our `Pet` class.

First, create a `Pet.js` file:

```no-highlight
touch Pet.js
```

In that file, let's create our class, and its constructor:

```javascript
class Pet {
  constructor(name, species, sound, favoriteSnack, owner) {
    this.name = name
    this.species = species
    this.sound = sound
    this.favoriteSnack = favoriteSnack
    this.owner = owner
  }
}

export default Pet
```

Here, we have created a `Pet` class which is able to set up the rules for what information, or `state`, our `Pet` objects will hold.

We can _instantiate_ our 3 pet objects like we had above via the following code. Go ahead and copy the below into the `main.js` file provided to you. Notice that we are sure to import our `Pet` class before using it!

```javascript
import Pet from './Pet.js'

let fang = new Pet('Fang', 'dog', 'woof', 'rock cakes', 'Hagrid')
let fluffy = new Pet('Fluffy', 'dog', 'growl', 'trespassers', 'Hagrid')
let nagini = new Pet('Nagini', 'snake', 'hiss', 'humans', 'Voldemort')
let crookshanks = new Pet('Crookshanks', 'cat', 'meow', 'spiders', 'Hermione')
```

Now, let's start to add some behavior to our pets. All pets, even Nagini, appreciate some good praise. Let's say we want to praise our pets by saying "(pet name), what a good (species)!" We can add a method to our class, just like we can in our objects, to make this happen.

Inside of our `Pet` class, underneath the constructor method, let's add the below method:

```javascript
praise() {
  return `${this.name}, what a good ${this.species}!`
}
```

We've used string interpolation, along with our instance variables `this.name` and `this.species`, to return the string we wanted that is specifically set up for each individual pet! Let's use our `main.js` file to run and test this code.

Add the below code underneath the existing code in the "Part One" section:

```javascript
console.log(fang.praise())
console.log(fluffy.praise())
console.log(nagini.praise())
console.log(crookshanks.praise())
```

If you now run `node main.js` in your terminal, you will see the three exclamations of praise appear!

Let's say we also want our animals to be able to speak back to us. We can set up a `speak` method for our pets as well by adding the below in to our `Pet` class:

```javascript
speak() {
  return this.sound
}
```

Notice that neither of our methods above require any arguments in order to run -- they have all information they need already accessible in the instance variables!

But what if we wanted our pets to be able to determine how many times they speak to us? We can _update_ our existing `speak` method to _take in an argument_ to determine how many times they should speak, and then use a `for` loop to add that many `sound`s to our return value:

```javascript
speak(repeats) {
  let noiseToMake = ""
  for(let repeat = 0; repeat < repeats; repeat++) {
    noiseToMake += `${this.sound} `
  }
  return noiseToMake
}
```

We can test this additional method by adding the following into our `main.js` file under the "Part One" section:

```javascript
console.log(`${fang.name} says: ${fang.speak(2)}`)
console.log(`${fluffy.name} says: ${fluffy.speak(1)}`)
console.log(`${nagini.name} says: ${nagini.speak(1)}`)
console.log(`${crookshanks.name} says: ${crookshanks.speak(3)}`)
```

### Part One Final Code

Checkpoint! Your `Pet.js` file should now look like this:

```javascript
class Pet {
  constructor(name, species, sound, favoriteSnack, owner) {
    this.name = name
    this.species = species
    this.sound = sound
    this.favoriteSnack = favoriteSnack
    this.owner = owner
  }

  praise() {
    return `${this.name}, what a good ${this.species}!`
  }

  speak(repeats) {
    let noiseToMake = ''
    for (let repeat = 0; repeat < repeats; repeat++) {
      noiseToMake += `${this.sound} `
    }
    return noiseToMake
  }
}

export default Pet
```

And your `main.js` code should have the below:

```javascript
import Pet from './Pet.js'

let fang = new Pet('Fang', 'dog', 'woof', 'rock cakes', 'Hagrid')
let fluffy = new Pet('Fluffy', 'dog', 'growl', 'trespassers', 'Hagrid')
let nagini = new Pet('Nagini', 'snake', 'hiss', 'humans', 'Voldemort')
let crookshanks = new Pet('Crookshanks', 'cat', 'meow', 'spiders', 'Hermione')

console.log(fang.praise())
console.log(fluffy.praise())
console.log(nagini.praise())
console.log(crookshanks.praise())

console.log(`${fang.name} says: ${fang.speak(2)}`)
console.log(`${fluffy.name} says: ${fluffy.speak(1)}`)
console.log(`${nagini.name} says: ${nagini.speak(1)}`)
console.log(`${crookshanks.name} says: ${crookshanks.speak(3)}`)
```

## But wait! What about us humans?

You may have noticed that we've stored the owner's name under the `Pet` class. But this doesn't feel like the best way to separate our code! We know that _object-oriented programming_ is a way of coding where we can use our code to model the physical world, and a pet and its owner are two separate entities. So it might make sense to make an `Owner` class as well, to store information on our owners!

> _By the way, separating our logic into two separate classes like we are here, one for each object, is following a design principle called the "Separation of Concerns". We'll go into this principle in more depth later on!_

Let's create a file for our Owner as so:

```no-highlight
touch Owner.js
```

Then, in `Owner.js`, we can start creating our `Owner` class, remembering to export it:

```javascript
class Owner {
  constructor(name, role) {
    this.name = name
    this.role = role
    this.pets = []
  }
}

export default Owner
```

Notice that we're taking in a name and a role for each owner, and setting them to instance variables. But we're also setting up an additional instance variable to keep track of their pets, which doesn't relate to an argument from our constructor, and always starts as an empty array!

If we have a `this.pets` array in order to store our pets, we need a way to add pets to this list! Let's add a method into our class below our constructor as so:

```javascript
addPet(pet) {
  this.pets.push(pet)
}
```

We're assuming here that the `pet` argument is actually an instance of a pet class! In order to indicate this, let's update our `main.js` file by adding some new owners and filling in their pets.

First, import your `Owner` class at the top:

```javascript
import Owner from './Owner.js'
```

Then, add the below code to the bottom of the file:

```javascript
let hagrid = new Owner('Hagrid', 'Groundskeeper')
let voldemort = new Owner('Voldemort', 'Dark Lord')
let hermione = new Owner('Hermione', 'student')

hagrid.addPet(fang)
hagrid.addPet(fluffy)
voldemort.addPet(nagini)
hermione.addPet(crookshanks)
```

What we're doing here is handing in the entire `fang` object, for example, into our `addPet` method to get added to our array! We could even add a `console.log(hagrid.pets)` in to our `main.js` file and run it if we wanted to see what this looks like.

We don't just want our owners to _store_ the pets, it would be nice to get some output like we did with our `Pet` class! Again, we'll use string interpolation, but this time we can use a `forEach` loop to iterate over our pets array. Let's add the below method into our `Owner` class:

```javascript
callPets() {
  let summons = ""
  this.pets.forEach(pet => {
    summons += `Here, ${pet.name}! `
  })
  return summons
}
```

And we can add the below into `main.js` to see this output:

```javascript
console.log(`${hagrid.name} says: ${hagrid.callPets()}`)
console.log(`${voldemort.name} says: ${voldemort.callPets()}`)
console.log(`${hermione.name} says: ${hermione.callPets()}`)
```

Go ahead and run `node main.js` and see it in action!

### Cleaning up our Pet class

Now that our `Owner` objects are keeping track of which pets belong to which owner, we no longer want our pets to keep track of their owner -- we only want to have one source of truth about which pets an owner owns! Let's go ahead and remove that responsibility from the `Pet` objects.

In our `Pet` class, we'll want to update our constructor to remove the `owner` attribute:

```javascript
  constructor(name, species, sound, favoriteSnack) {
    this.name = name
    this.species = species
    this.sound = sound
    this.favoriteSnack = favoriteSnack
  }
```

Then, we should update our `main.js` file to stop passing the owner in when instantiating our pets:

```javascript
let fang = new Pet('Fang', 'dog', 'woof', 'rock cakes')
let fluffy = new Pet('Fluffy', 'dog', 'growl', 'trespassers')
let nagini = new Pet('Nagini', 'snake', 'hiss', 'humans')
let crookshanks = new Pet('Crookshanks', 'cat', 'meow', 'spiders')
```

Now, let's re-run our `main.js` file to make sure all is looking good!

### Final Code

One last look at our final code:

##### Pet.js

```js
class Pet {
  constructor(name, species, sound, favoriteSnack) {
    this.name = name
    this.species = species
    this.sound = sound
    this.favoriteSnack = favoriteSnack
  }

  praise() {
    return `${this.name}, what a good ${this.species}!`
  }

  speak(repeats) {
    let noiseToMake = ''
    for (let repeat = 0; repeat < repeats; repeat++) {
      noiseToMake += `${this.sound} `
    }
    return noiseToMake
  }
}

export default Pet
```

##### Owner.js

```javascript
class Owner {
  constructor(name, role) {
    this.name = name
    this.role = role
    this.pets = []
  }

  addPet(pet) {
    this.pets.push(pet)
  }

  callPets() {
    let summons = ''
    this.pets.forEach(pet => {
      summons += `Here, ${pet.name}! `
    })
    return summons
  }
}

export default Owner
```

##### main.js

```javascript
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
```
