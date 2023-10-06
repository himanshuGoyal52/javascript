console.log("Arrow Functions");

function harry(){
    console.log("This is the funniest person ever");
}
const happy = function(){
    console.log("This is the chutiya person ever");
}
harry();
happy();

// now arrow function 
// const ism = () => {
//     console.log("Cha mudi padi hai");
// }

// this function is returning something
// now ultra smallest arrow function
// One liners do not require braces/return
// code below
// const ism = () => "Cha mudi padi hai";
// object onliner return mai parenthies lagana hota hai
const ism = () => ({situation : "Cha mudi padi hai",data:"30/06/2022"});

let str = ism();
console.log(str);

// greet function
// const greet = (name) => "Hii " + name;
   const greet = name => "Hii " + name;
   console.log(greet("Happy"));
// NOTE : single parameters do not need () but you will have to put () if there are multiple parameters
const MorGreet = (name , ending) => "Good Morning " + name + " " + ending ; 
console.log(MorGreet("Goyal", "SC"));

