/* 
    Objects - we can make objects in 2 ways
    1. Singleton object - When we create the object from constructor then it is called as singleton object 
    2. Object literals - normal way of making object
*/

//=======================================================================================================

// 1. Singleton object (Syntax)
const user = new Object();  // this is how singleton object creates.

// 2. Merging objects - it returns new array (we use sprade operator here)
const user1 = {
    name : "Viranchi",
    age : 23
}

const user2 = {
    company : "Capgemini",
    role : "Automation Test Engineer"
}

const user3 = {...user1, ...user2};
console.log(user3);

//=======================================================================================================

