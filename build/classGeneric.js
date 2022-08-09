"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiples(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
const numbers = new List(1, 2, 3, 4, 5);
numbers.addMultiples(2, 3, 4, 5);
function sayHello(name) {
    // return `Hi, ${name}. It's a plesure to see u!`;
    return name;
}
// console.log(sayHello<number>(2));
