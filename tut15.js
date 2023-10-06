// Traversing the DOM
console.log("Welcome to tut15");

let cont = document.querySelector('.container');
// console.log(cont.childNodes); // taking new line as text child nodes
// console.log(cont.children); 

let nodeName = cont.childNodes[3].nodeName;
let nodeType = cont.childNodes[3].nodeType; // nodeType defination below
// console.log(nodeName);
// console.log(nodeType);

// Node Types
/* 
1. element
2. attribute 
3. Text Nodes
8. Comment
9. document 
10. docType
*/
/***************************************************************/

let container = document.querySelector('div.container');
// console.log(container.children);
// console.log(container.children[0].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.childElementCount);

// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
