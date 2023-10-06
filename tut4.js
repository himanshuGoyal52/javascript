// Preimtive data types //

// String
let name = "Happy";
console.log("My string is "+name);
console.log("Data type is "+(typeof name));

// Numbers
let marks = 34.5;
console.log("Data type is "+(typeof marks));

// Boolean
let isGay = false;
console.log("Data type is "+(typeof isGay));

// Null
let nullVar = null;
// console.log(nullVar);
console.log("Data type is "+(typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is "+(typeof undef));

console.log("----------------------------------------");
// Reference Data Types //

// Array
let myArr = [1,2,3,4,false,"String"];
console.log("Data type is "+(typeof myArr));

// Object // here maths , science , hindi are object keys
let Marks = {
    maths : 85 ,
    science : 90,
    hindi : 50,
    english : 80,
}
console.log("Data type is "+(typeof Marks));

// functions
function findName() {
    
}
console.log("Data type is "+(typeof findName));

// Date
let date = new Date();
console.log(date);
console.log("Data type is "+(typeof date));
