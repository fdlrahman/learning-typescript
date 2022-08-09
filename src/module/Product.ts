import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("zenbook", true, true);
console.log(asus);
asus.a();
let macbook = new Macbook(2017, false, true);
console.log(macbook);
