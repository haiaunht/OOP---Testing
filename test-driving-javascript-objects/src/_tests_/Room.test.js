import Room from '../Room.js'

describe("A room", () => {
    let room
    const name = "The Fairmont"
    const maxOccupancy = 100

  beforeEach(() => {
      room = new Room(name, maxOccupancy)
  })  

  it("has a name", () => {      
      expect(room.name).toEqual(name)
  })  

  it("has a maximum occupancy", () => {
      expect(room.maxOccupancy).toEqual(maxOccupancy)
  })

  //it.only("is initially unreserved", () => { ==> it.only only execute that test,ignore the rest
  it("is initially unreserved", () => {
      expect(room.isReserved()).toEqual(false)
  })
})