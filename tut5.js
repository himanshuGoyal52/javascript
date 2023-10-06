// type Conversion & Coercion
console.log("Welcome to tut5");

let myVar;
myVar = String(34);
// console.log(myVar , (typeof myVar));

let boolVar = String(true);
// console.log(boolVar , (typeof boolVar));

let date = String(new Date());
// console.log(date , (typeof date));

let arr = String([1,2,3,4,5]);
// console.log(arr,arr.length , (typeof arr));

// ToString Function
let i = 8; // let i = ture; // let i = false; // let i = new Date();
// console.log(i.toString());

let str = Number("2841");
str = Number("515s9");   // NaN = not a number
str  = Number(true);
str  = Number(false);
str  = Number([1,5,8,3]);  // NaN = not a number
// console.log( str, (typeof str));

// let number = parseInt("34.369");
let number = parseFloat("34.369");
// console.log(number.toFixed(2) , (typeof number));


/*********************** Type Coercion ****************************/
let myStr = "125";
let myNum = 15;
console.log(myNum+myStr);