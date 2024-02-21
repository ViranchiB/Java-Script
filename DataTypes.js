// Data types

// 1. primitive datatype (call by value)
/*  a.Number
    b.String
    c.null
    d.undefined
    e.symbol - it makes values unique
    f.BigInt
    h.boolean
*/

let val1 = Symbol(123);
let val2 = Symbol(123);

console.log(val1 === val2);  // false

// 2. Non Primitive Datatype (call by referance)
/* 
    a.Array
    b.Objects
    c.Functions
*/

// If we take typeOf this datatypes it gives function (and typeOf function is "function object")
let arr = ["Viranchi", "Pratik"];
console.log(typeof arr);  // object


