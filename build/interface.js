"use strict";
class Asus {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    on() {
        console.log("turn on the laptop");
    }
    off() {
        console.log("turn off the laptop");
    }
}
const asus = new Asus("Asus", "Black");
asus.on();
