"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Asus_1 = __importDefault(require("./Asus"));
const Macbook_1 = __importDefault(require("./Macbook"));
let asus = new Asus_1.default("zenbook", true, true);
console.log(asus);
let macbook = new Macbook_1.default(2017, false, true);
