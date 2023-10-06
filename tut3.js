// Variables in js
// var , let , const 

/* -------------------- Var (Global Scope) ------------------------- */ 
var name = "Happy";
var channel;
var marks = 47;
channel = 'Himanshu Goyal';
channel = "Geets Fashion Wear"
console.log(name , channel , marks);

// Rules for creating javascript variables //
/*
1. Cannot start with numbers
2. Can start with : letter , _ , $  ( it is not suggested to use _,$)
3. Are case sensitive 
 */
{
    var city = "Delhi";
}
// There is less use of var ... instead we use let and const

/* -------------- Const (Block Scope) ---------------------------- */
// In "const" variable we can only assing only one time
const naam = "Hari Ram";
// const fruit; // Error
// naam = "Hari Shankar"; // not possible 
console.log(naam);

/* ------------------ Let (Block Scope) ----------------------------- */
{
    let city = "Jodhpur";
    city = "Jaipur";
    console.log(city);
}
console.log(city);

// Data Types //
/* Array */
const arr1 = [12,15,48,59];
// arr1.push(69);
arr1.pop();
console.log(arr1);

/* Objects */
const obj ={
    name : "Himanshu Goyal",
    age : 19,
    bandi : "Anushka Verma",
    hobby : "Ukulele",
}
console.table(obj);

/*
Most common programming case types :
1. camelCase // use this case
2. kebab-case 
3. snake_case
4. PascalCase

*/