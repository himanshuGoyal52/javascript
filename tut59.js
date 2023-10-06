console.log('JavaScript Symbols');

// NOTE : sybmols are introduced in ES6 to make a unique keys
// symbols are premitive
const sym1 = Symbol('my identifier');
const sym2 = Symbol('my identifier');
console.log('Symbol is',sym1);
console.log('Type of symbol is',typeof(sym1));

console.log(sym1 === sym2);

const a = 'this is';
const b = 'this is';
console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');

let myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Goyal";
myObj['name'] = 'Good boy'

console.log(myObj);  // console.log(myObj[k1]);
console.log(myObj[k2]);
// console.log(myObj.k1) // ALERT : cannot do this to get Rohan because it is same as myObj['k2']

// Symbols are ignored in for in loop
for(let key in myObj){
    console.log(key , myObj[key]);
}

console.log(JSON.stringify(myObj)); // symbols are ignored