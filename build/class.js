"use strict";
class User {
    constructor(name) {
        this.member = [];
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    showMember() {
        return "Member: " + (this.member.length ? this.member.join(", ") : "-");
    }
}
// public = bisa di akses di semua class / dari luar kelas
// protected = hanya bisa di akses dari class tersebut dan kelas turunannya
// private  = hanya bisa di akses dari class itu sendiri
class Admin extends User {
    constructor(name, phone) {
        super(name);
        this._email = "";
        this.phone = phone;
    }
    addMember(name) {
        if (!this.member.includes(name)) {
            this.member.push(name);
        }
    }
    set email(value) {
        if (value.indexOf("@gmail.com") > 0) {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRole = "admin";
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
