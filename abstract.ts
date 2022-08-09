abstract class Vehicle {
    abstract tires: number;

    start(): void {
        console.log("broomm...");
    }
}

class Car extends Vehicle {
    tires: number = 4;
}

const car = new Car();

console.log(car.tires);
car.start();
