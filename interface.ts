interface Laptop {
    color: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    on(): void {
        console.log("turn on the laptop");
    }

    off(): void {
        console.log("turn off the laptop");
    }
}

const asus = new Asus("Asus", "Black");

asus.on();
