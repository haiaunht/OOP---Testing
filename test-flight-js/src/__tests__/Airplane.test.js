import Airplane from '../Airplane.js'

describe('initializing a new Airplane', () => {
    let newAirplane

    beforeEach(() => {
        newAirplane = new Airplane("Cesna", 10, 150)
    })

    test('returns the type of plane', () => {
      expect(newAirplane.type).toBe("Cesna")
    })
    
    test('returns the weigth of plane', () => {
      expect(newAirplane.weight).toBe(10)
    })
    
    test('returns the area of plane', () => {
      expect(newAirplane.area).toBe(150)
    })

    test('Cesna cannot start since there is no fuel', () => {
      expect(newAirplane.start()).toBe('Cesna cannot start because there is no fuel')
    })

    test('airplane will start when invoke #start, use 1 fule unit', () => {
        newAirplane.addFuel(10)
        expect(newAirplane.start()).toBe('Cesna started')
        expect(newAirplane.start()).toBe('Cesna was already started')
        expect(newAirplane.fuelCheck()).toBe(9)
    })    

    test('airplane will takeoff, use 1+4 fuel unit', () => {
        newAirplane.addFuel(10)
        expect(newAirplane.start()).toBe('Cesna started')
        expect(newAirplane.takeoff()).toBe('Cesna launched')
        expect(newAirplane.fuelCheck()).toBe(5)
    })

    test('airplane will not landed because not taking off', () => {
        newAirplane.addFuel(10)
        expect(newAirplane.start()).toBe('Cesna started')
        expect(newAirplane.land()).toBe('Cesna started, please takeoff before landing')
        expect(newAirplane.fuelCheck()).toBe(9)
    })

    test('airplane will landed, use 1+4+1 units => have 4 units left', () => {
        newAirplane.addFuel(10)
        expect(newAirplane.start()).toBe('Cesna started')
        expect(newAirplane.takeoff()).toBe('Cesna launched')
        expect(newAirplane.land()).toBe('Cesna landed')
        expect(newAirplane.fuelCheck()).toBe(4)
    })   

    test('airplane will start, but wont takeoff because not enough fuel', () => {
        newAirplane.addFuel(3)
        expect(newAirplane.start()).toBe('Cesna started')
        expect(newAirplane.takeoff()).toBe('Cesna does not have enough fuel')
        expect(newAirplane.land()).toBe('Cesna started, please takeoff before landing')
        expect(newAirplane.fuelCheck()).toBe(2)
    })   
    
})



// const newAirplane = new Airplane("Cesna", 10, 150)

// test('returns the type of plane', () => {
//   expect(newAirplane.type).toBe("Cesna")
// })

// test('returns the weigth of plane', () => {
//   expect(newAirplane.weight).toBe(10)
// })

// test('returns the area of plane', () => {
//   expect(newAirplane.area).toBe(150)
// })

// describe("#takeoff", () => {
//     it("should not take off when not started", () => {
//         expect(newAirplane.engineOn).toBe(false)
//         expect(newAirplane.takeoffState).toBe(false)
//         expect(newAirplane.takeoff()).toBe("Cesna not started, please start")
//     })
// })

// test('airplane will start when invoke #start', () => {
//     expect(newAirplane.start()).toBe('Cesna started')
//     expect(newAirplane.start()).toBe('Cesna was already started')
// })

// describe("#takeoff", () => {
//     it("now should take off since test start() is invoke", () => {
//         expect(newAirplane.engineOn).toBe(true)
//         expect(newAirplane.takeoffState).toBe(false)
//         expect(newAirplane.takeoff()).toBe("Cesna launched")
//         expect(newAirplane.takeoffState).toBe(true)
//     })
// })

// test('airplane will takeoff', () => {
//     //expect(newAirplane.takeoff()).toBe('Cesna launched')
//      expect(newAirplane.land()).toBe('Cesna landed')
// })

// test('testing outside of scope', () => {
//     expect(newAirplane.takeoff()).toBe('Cesna launched')
//     expect(newAirplane.land()).toBe('Cesna landed')
// })