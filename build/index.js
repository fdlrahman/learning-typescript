"use strict";
// tipe data
// string
// let nama: string = "Fadhlurrahman";
// console.log("nama saya:", nama);
Object.defineProperty(exports, "__esModule", { value: true });
// number
// let umur: number = 20;
// console.log("umur saya:", umur);
// bool
// let married: boolean = false;
// married = true;
// console.log("sudah menikah:", married ? "sudah" : "belum");
// any
// let hero: any = "Thor";
// hero = true;
// console.log("favorit hero:", hero);
// array
// let nums: number[] = [1, 2, 3];
// nums = [4, 5, 6];
// let strings: string[] = ["string", "string", "string"];
// strings = ["bool", "bool", "bool"];
// let anys: any[] = [1, "bool", true, {}, []];
// tuples: sebuah array yang isinya bisa berbagai macam tipe data tapi nilai/item nya terbatas
// let biodata: [string, number] = ["Makassar", 2007];
// enums
// numeric enum
// enum Months {
//     JAN = 1,
//     FEB,
//     MAR,
//     APR,
//     MAY,
// }
// console.log("Februari", Months.FEB);
// string enum
// enum Months {
//     JAN = "January",
//     FEB = "February",
//     MAR = "March",
//     APR = "April",
//     MAY,
// }
// function
// function getName(name: string = "-"): string {
//     return `My name is ${name}`;
// }
// let nama: string;
// nama = getName();
// console.log(nama);
// function
// void function
// function sayHello(): void {
//     console.log("say");
//     console.log("hello");
// }
// sayHello();
// console.log(sayHello());
// argument
// function multiply(val1: number, val2: number): number {
//     return val1 * val2;
// }
// console.log("multiply:", multiply(1, 1));
// function type
// type Age = Number;
// let age: Age = 15;
// type Add = (val1: number, val2: number) => number;
// const sum: Add = (val1: number, val2: number): number => {
//     return val1 + val2;
// };
// const result = sum(5, 5);
// console.log("result:", result);
// object
// type Obj = {
//     name: string;
//     age: number;
// };
// let obj: Obj = {
//     name: "Fadhlurrahman",
//     age: 15,
// };
// union type
// let phone: string | number;
// phone = "081247026219";
// phone = 6281247026219;
// console.log(phone);
// default parameter
// const fullName = (first: string, last: string = "M.Kom"): string => {
//     return `${first} ${last}`;
// };
// const name = fullName("Rahman", "Doddy");
// console.log(name);
// optional parameter
// const getUmur = (val1: number, val2?: number): String => {
//     return val1 + " " + val2;
// };
// console.log(getUmur(1));
