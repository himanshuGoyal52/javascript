// console.log("We are in tut12.js");

let a = window.document;
console.log(typeof document);  // Reference Data Type
console.log("------------------------------")

// a = document.all; // all tags // all is now deprecated
// a = document.getElementsByTagName('*');
a = document.forms[0]; // gives all forms tags
// console.log(a);

/* ERROR */
// a.forEach(element => {
//     console.log(element);
// });

// Array.from(a).forEach(function(ele){
//     console.log(ele);
// })

// a = document.links;
// a = document.links[0];
a = document.links[0].href;

// see and use : document.images and documents.scripts
// a = document.scripts[1];
// a = document.images[1];

console.log(a);