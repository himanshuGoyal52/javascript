/*
Element Selectors : 
1. Single element selector
2. Multi element selector
*/

// 1. Single element selector
let element = document.getElementById('firstChild');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.backgroundColor = 'yellow';
// element.innerText = "Father 1";
// element.innerHTML = '<b>Father 1</b>';

// console.log(element);

let sel = document.querySelector('#firstChild');
// sel = document.querySelector('.child'); // first tag with class child
// sel = document.querySelector('div'); // first div
// sel.style.backgroundColor = 'green';
// console.log(sel);

//2. Multi-element Selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');

// console.log(elems)
// console.log(Array.from(elems));

Array.from(elems).forEach(ele => {
    console.log(ele);
    ele.style.color = "rgb(10,110,120)";
});


// console.log(elems[0].getElementsByClassName('child')[2]);