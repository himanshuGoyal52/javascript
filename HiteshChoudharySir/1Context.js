sayHello();  // heinnn above funciton declaration and working also

function sayHello(){
    console.log('Hello there');
}

var myName = "Himanshu"

// if(myName === myName){
//      console.log("True statement");
// }

// In broswer conssole the window is the global context ... if we run below statmente then in node.js then show error
if(myName === window.myName){
    console.log("True Statement");
}

// global context of node.js
if(myName === this.myName){
    console.log("True Statement");
}