// General Loops : for , while , do-while

/* For Loop */
console.log("------ For Loop ---------");
for (let i = 0; i < 5; i++) {
    console.log("Hii number : ", i + 1);
}

console.log("------ While Loop ---------");

/* While Loop */
let i = 5;
while (i < 10) {
    console.log("Hii number : ", i + 1);
    i++;
}

console.log("------- Do While --------");

/* Do While */
do {
    console.log("Hii number : ", i + 1);
    i++;
} while (i < 8)

// Adami chutiya hai kuch bhi chahta hai //

// Break and continue //
console.log("------ Continue ---------");
for (let i = 0; i < 5; i++) {
    if( i === 2)
        continue;
    console.log("Hii number : ", i + 1);
}
console.log("------- Break --------");
for (let i = 0; i < 5; i++) {
    if( i === 2)
    break;
    console.log("Hii number : ", i + 1);
}

/* Array */
console.log("------- forEach (Array) --------");
let arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ];
let you = arr.forEach(function(element , index , array){
    console.log( element , index , array);
});

/* Object */
console.log("------- loop for (Object) --------");
let obj ={
    name : "Himanshu Goyal",
    age : 20,
    Girlfriend : 0,
    cp : "Mann nahi lagg raha hai",
}
for(let key in obj){
    console.log(`${key} value is ${obj[key]} `);
}
