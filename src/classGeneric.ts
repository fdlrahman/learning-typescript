class List<T> {
    public data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiples(...elements: T[]) {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}

const numbers = new List<number>(1, 2, 3, 4, 5);

numbers.addMultiples(2, 3, 4, 5);

function sayHello<T>(name: T): T {
    // return `Hi, ${name}. It's a plesure to see u!`;
    return name;
}

// console.log(sayHello<number>(2));
