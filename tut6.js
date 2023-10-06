console.log("We are in tut6.js");

const name = "Happy";
const greeting = "Good Morning";
// console.log(greeting+ ' ' +name);

let html;
html = "<h1>This is h1 heading </h1>"+
"<p>This is para</p>";

html =  html.concat('this',' str2');  // jodd do
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// Different Function in string
// console.log(html[0],html[1]);
// console.log(html.indexOf('This'));
// console.log(html.lastIndexOf('This'));
// console.log(html.charAt(3));
// console.log(html.endsWith('str2'));
// console.log(html.includes("p>"));
// console.log(html.substring(11,15)); // to a to b-1
// console.log(html.slice(-7)); // slice(0,4) // from 0 to length of 4
// console.log(html.split(" ")); // split("<p>")
console.log(html.replace("This" , "it")); // changes only first occurnce

/* Template Literals */
let fruit1 = "\"Orange\"";
let fruit2 = "Apple";
let myHtml = `Hello ${name}
<h1> This is heading </h1>
<p> You like ${fruit1} and ${fruit2} to eat </p>
`;
// console.log(myHtml);
document.body.innerHTML = myHtml;


