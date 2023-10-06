console.log("This is tutorial 57");

// maps in JavaScript from (ES6 version of javaScript)
// We can use any type of key or value

const myMap = new Map();
// console.log(myMap);

const key1 = 'myStr',key2={name : 'Himanshu'},key3=function(){};

// setting map values
myMap.set(key1,'This is a string');
myMap.set(key2,'This is a blank obj');
myMap.set(key3,'This is an empty function');

console.log(myMap);

// getting values form map
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
console.log(myMap.get(key3));

// get the size of the map
console.log(myMap.size);

// you can loop using for..of to get keys and values
for(let [key,value] of  myMap){
    console.log(key ,' : ', value);
}

// get only keys
// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// get only values
for(let key of myMap.values()){
    console.log(`value is ${key}`);
}

// you can loop through a map using for each loop
myMap.forEach((value,key)=>{
    console.log('key is ',key);
    console.log('value is ',value);
})

// converting map to an array
let myArray = Array.from(myMap);
console.log('map to array is ' , myArray);

// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log(myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values());