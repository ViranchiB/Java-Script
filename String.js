// Java also
// 1. Split method - it will seperate the string as per the criteria and it return as a array

// split("criteria on which u have to seperate the string", "limit")

let email = "Virnachibhure@gmail@outlook.com";

// when he found @ in string it will split the string
console.log(email.split("@")); // [ 'Virnachibhure', 'gmail', 'outlook.com' ]

// split on the basis of criteria and limit
console.log(email.split("@", 1)); // [ 'Virnachibhure' ]

/* ============================================================================================================= */

// 2. at() - it will return the char we have to give the index
let name = "Viranchi"
console.log(name.at(4)); // n

/* ============================================================================================================= */

// 3.String.raw - it will not skip the back slash (mostly used for file path)

// without raw
let path = "C:\Development\profile\aboutme.html";
console.log(path); // C:Developmentprofileaboutme.html

// with raw
let path1 = String.raw `C:\Development\profile\aboutme.html`;
console.log(path1); // C:\Development\profile\aboutme.html

/* ============================================================================================================= */

// Java also
// 4. repeat(limit) - it will repeat the string till the limit

let s1 = "Happy! ";
console.log(`Todya's my mood is ${s1.repeat(3)}"`); //Todya's my mood is Happy! Happy! Happy! "