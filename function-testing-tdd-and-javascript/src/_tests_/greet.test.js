import greet from "../greet.js"
import double from '../double.js'

describe("greet function", () => {
    it("says Hi to Scott", () => {
        expect(greet("Scott")).toEqual("Hello, Scott")
    })
})

describe("doubling a number", () => {
    it("double 2 resulting in 4", () => {
        expect(double(2)).toEqual(4)
    })

    it("doubles 5 resulting in 10", () => {
        expect(double(5)).toEqual(10)
    })
})