"use strict";
class Vehicle {
    start() {
        console.log("broomm...");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.tires = 4;
    }
}
const car = new Car();
console.log(car.tires);
car.start();
