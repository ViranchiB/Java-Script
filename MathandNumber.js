// Parsing the number
let num = "234567";
console.log(Number.parseInt(num)); // 234567

console.log(typeof Number.parseInt(num)); // return Number

let name = "Viranchi123456";
console.log(Number.parseInt(name));  // NaN (it is not able to parse)


let value = 200;

console.log(value.toString()); // return string

// 1. toFixed - after dot how much number we want but it will return string

console.log(value.toFixed(2)); // 200.00 (string)
console.log(typeof value.toFixed(4)); // 200.0000 (string)

// 2. toLocaleString() - it will add "," if there is long number to make it redable
//                     - it will return string
//                     - also it will return in England standard we can convert it in Indian also

value1 = 1000000;
console.log(value1.toLocaleString()); // 1,000,000

console.log(value1.toLocaleString("en-In")); // 10,00,000 "in Indian standard"

// toPrecise - it will round up the vlaue depends on the last number if it is greater than 5 or not.
//           - we have to tell after which length we have to get the precise number
//           - it will also return string

let value2 = 100.876;
console.log(value2.toPrecision(3));

// ============================================================================================================

// Generate Random Number in the given range

let min = 10, max = 20;

// Floor (jamain) it will set floating number to number
let result = Math.floor(Math.random() * (max - min + 1) + min); 

console.log(result);