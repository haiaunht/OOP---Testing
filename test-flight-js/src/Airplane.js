class Airplane{
    constructor(type, weight, area, fuel) {
        this.type = type
        this.weight = weight
        this.area = area
        this.engineOn = false
        this.takeoffState = false
        this.isLanding = false
        this.fuel = fuel || 0
    }
    addFuel(number) {
        this.fuel += number
    }
    fuelCheck() {
        return this.fuel
    }
    start() {
        if (this.fuel === 0) {
            this.engineOn = false
            return `${this.type} cannot start because there is no fuel`
        } else if (!this.engineOn) {
            this.engineOn = true
            this.fuel--
            return `${this.type} started`
        } else {
            return `${this.type} was already started`
        }
    }
    takeoff() {
        //check if enough for taking off 4 units and landing 1 unit
        if (this.fuelCheck() > 5) {
            if (this.engineOn) {
                this.takeoffState = true
                this.fuel -= 4
                return `${this.type} launched`
            } else {
                this.takeoffState = false
                return `${this.type} not started, please start`
            }
        } else {
            this.takeoffState = false
            return `${this.type} does not have enough fuel`
        }
    }
    land() {
        if (!this.engineOn) {
            return `${this.type} not started, please start`
        } else if (!this.takeoffState) {
            return `${this.type} started, please takeoff before landing`
        } else if (this.isLanding) {
            return `${this.type} already on the ground`
        } else {
            this.fuel--
            return `${this.type} landed`
        }
    }
}
export default Airplane
