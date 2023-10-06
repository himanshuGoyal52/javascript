// Array 
let marks = [ 34 , 22 , 55 , 84 , 94 , 14 ];
const fruits = [ 'Orange' , 'Apple' , 'Pineapple' ];
const mixed = [ 'str' , 55 , [3 , 5] ];
const arr = new Array(23 , 123 , 21 , 'Orange');
// console.log(arr);
console.log(marks);
// console.log(mixed);

// console.log(arr.length); // Property
// console.log(Array.isArray(arr)); // method
arr[0] = 'happy';
// console.log(arr);

let value = marks.indexOf(14);
// console.log(value);

// Mutating or Modifying arrays // Method //
// marks.push(34);
// marks.unshift(1009);
// marks.pop();
// marks.shift();
// marks.splice( 1 , 2 ); // Start form one and delete two elements
// marks.reverse();
let marks2 = [1, 2 , 3 , 7];
marks = marks.concat(marks2);
console.log(marks);


/**************** Objects *******************/
let myObj = {
    'first name' : 'Happy',
    channel : 'HG',
    gandu : true,
    isActive : false,
    marks : [1,5,3,6]
}
console.log(myObj);
console.log(myObj.isActive);
console.log(myObj['first name']);
