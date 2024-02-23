/*
    1. In JS arrays are resizable
    2. When we use copy operation on array then it will use the shallow copy(referance) / deap copy(value)
*/

// ============================================================================================================

/* 1. Join - The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
           - return type is string
*/

let arr = [1,2,3,4,5]
console.log(arr.join());

// ============================================================================================================

/* 2. Slice -  returns a shallow copy
            - returns a shallow copy of a portion of an array into a new array object selected from start to end 
               (end not included) where start and end represent the index of items in that array.
            - The original array will not be modified.

            - it does not include full range which we gave (it gave -1 of the given range)
*/

let array = [0,1,2,3,4,5];
console.log("A", array);

let newArr = array.slice(1,3);
console.log(newArr); // [ 1, 2 ]
console.log("B", array);  // orignal array is not modified

/* splice - The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

        - it includes the full range which we gave
        - it will cut the part of orginal array which range we are given
*/

let a1 = [0,1,2,3,4,5]
console.log("orginal", a1); //orginal [ 0, 1, 2, 3, 4, 5 ]

let a2 = a1.splice(1,3)
console.log(a2); // [ 1, 2, 3 ]
console.log("Orignal", a1); // Orignal [ 0, 4, 5 ]  orignal array is modified

/* 
    splice more syntax

    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2)

*/

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
console.log("Orignal", myFish);

const removed = myFish.splice(2, 0, "drum");

console.log("Orignal", myFish); // Orignal [ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ] 1 item added

// ============================================================================================================

/* 1. Sprade - merge the arrays (as much as u want)
             - it return the new array
             - it seperates all the elements and merge it into new array

    Syntax - const new_array_name = [...array1, ...array2, ...array3, .......];
*/

const marval_heros = ["Ironman", "Spiderman", "Hulk"];

const dc_heros = ["Batman", "Superman", "flash"];

const heros = [...marval_heros, ...dc_heros];

console.log(heros); // [ 'Ironman', 'Spiderman', 'Hulk', 'Batman', 'Superman', 'flash' ]
