class User {
    public name: string;
    public member: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    };

    showMember(): string {
        return "Member: " + (this.member.length ? this.member.join(", ") : "-");
    }
}

// public = bisa di akses di semua class / dari luar kelas
// protected = hanya bisa di akses dari class tersebut dan kelas turunannya
// private  = hanya bisa di akses dari class itu sendiri

class Admin extends User {
    public phone: string;
    private _email: string = "";
    static getRole: string = "admin";

    constructor(name: string, phone: string) {
        super(name);
        this.phone = phone;
    }

    addMember(name: string): void {
        if (!this.member.includes(name)) {
            this.member.push(name);
        }
    }

    set email(value: string) {
        if (value.indexOf("@gmail.com") > 0) {
            this._email = value;
        }
    }

    get email(): string {
        return this._email;
    }

    // get;
}

class Member extends User {
    sayHelloToMember() {
        return `Hello, ${this.name}. It's pleasure to see u!`;
    }
}

// let admin = new Admin("Budi", "+6281247026219");

// admin.addMember("Rosa");
// admin.addMember("Riko");
// admin.addMember("Malik");

// admin.email = "jedacoding@gmail.com";
// console.log(admin.email);

// console.log("Member: ", admin.showMember());
