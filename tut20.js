localStorage.setItem("Name" , "Harry");
localStorage.setItem("Name2" , "Happy");

let name = localStorage.getItem('Name');
console.log(name);

// clears the local storage
// localStorage.clear();

// Removing perticular key value
localStorage.removeItem("Name");
 
// Array
let arr = ['adrak' , 'pyaz' , 'lehsun'];
localStorage.setItem("Sabzi" , JSON.stringify(arr)); // converted into a string
let Sabzi = JSON.parse(localStorage.getItem('Sabzi'));
console.log(Sabzi);


/************** Session Storage ***************/
sessionStorage.setItem("Session_Name" , "Harry2");
sessionStorage.setItem("Session_Name2" , "Happy2");


// Time
/*
Local-Storage : no expiry date of ls
Session-Storage : deleted when browser is closed
*/

/************* Cookies **************/
document.cookie = 'name=kyle; expires='+new Date(2022,11,1).toUTCString();
console.log(document.cookie);
