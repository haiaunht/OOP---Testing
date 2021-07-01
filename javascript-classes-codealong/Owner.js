class Owner {
    constructor (name, role) {
        this.name = name
        this.role = role
        this.pets = []
    }

    addPet(pet) {
        this.pets.push(pet)
    }

    callPets() {
        let summon = ""
        this.pets.forEach(pet => {
            summon += `Here, ${pet.name}`
        })
        return summon
    }
}

export default Owner