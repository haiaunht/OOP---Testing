class Pet {
    constructor (name, species, sound, favoriteSnack) {
        this.name = name
        this.species = species
        this.sound = sound
        this.favoriteSnack = favoriteSnack
    }

    praise() {
        return `${this.name}, what a good ${this.species}!`
    }

    speak(repeats) {
        let noiseToMake = ""
        for(let repeat = 0; repeat < repeats; repeat++) {
            noiseToMake += `${this.sound} `
        }
        return noiseToMake
    }
}

export default Pet