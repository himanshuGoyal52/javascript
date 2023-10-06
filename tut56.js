console.log("Tut 56");

let people = ["Harry" , "Rohan" , "SkillF" , "Shubham" , "Himanshu" , "Giri"];
// iterating in a array (tratitional loops)
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// 1. ITERATIN AN OBJECT
let obj = {
    name : "harry",
    language : "javaScript",
    hobbies : "ukulele",
}
// iterating in an object
// 1.1 tranditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 for in loop :)
for(let key in obj){
    console.log(obj[key]);
    // console.log(obj.key); // this will not work coz key is a string
}

// 2. ITERATING A STRING
// 2.1 we can use "for in" with strings to loop though all the characters
let myString = 'This is my string';
// for(let char in myString){
//     console.log(myString[char]);
// }


/******************* for of loops *********************/
console.log('------------------------------------------------------');
for(let name of people){
    console.log(name);
}

// conculsion : for-in loops in object and for-of loops in array and strings