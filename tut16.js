let element = document.createElement('li');


// Adding class name to the li element 
element.className = "childul";
element.id = "ChildID";

// element.innerText = "Suchi";
// element.innerHTML = "<b>Suchi</b>";
let text = document.createTextNode('I am a text node');
element.appendChild(text);
element.setAttribute('title' , 'mytitle');

let ull = document.querySelector('.this');
ull.appendChild(element);


console.log(element);

/***********************************************/
let elem2 = document.createElement('h3');
elem2.id = "elem2";
elem2.className ="elem2";

elem2.style.textAlign = "center";
elem2.style.margin = "0px";
elem2.style.fontFamily = "Segoe UI";

let tNode = document.createTextNode("This is a heading");
elem2.appendChild(tNode);

element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element , document.getElementById('lastEle')); // params : (node to insert , node to remove)

myul.removeChild(document.getElementById('myy'));

elem2.removeAttribute('id');
let pr = elem2.getAttribute('id');
console.log(elem2.hasAttribute('classs'));

console.log(pr);

// quick quiz
/*
Create a heading element with text as "Go to CoedeWithHarry" and create 
a tag outside it with href = "https://codewithharry.com"
*/

/************************************************************/
let heading = document.createElement('h1');
let website = document.createTextNode("Go to CodeWithHarry");
heading.appendChild(website);
heading.setAttribute('href' , 'https://codewithharry.com');
console.log(heading);
