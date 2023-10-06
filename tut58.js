console.warn("Tut-58");

// set stores unique values
let mySet = new Set(); // Initialize an empty set

console.log('The set looks like this : ',mySet);

// Adding values to this set
mySet.add('this');
mySet.add('my name');
mySet.add('my name'); // only one time
mySet.add(12);
mySet.add({hemlo:'hi'})

console.log('The set looks like this : ',mySet);

mySet = new Set([1,42,'this',false,{a:4,b:8},42]); // only unique
console.log(mySet);

console.log('set size is ',mySet.size);

console.log(mySet.has(42)); // for 69 : false

console.log(mySet.delete(42));
console.log(mySet);
console.log(mySet.delete(42));

// ITERATING A SET
console.log('--------------------------')
// for(let item of mySet){
//     console.log(item);
// }
mySet.forEach((ele)=>{
    console.log(ele);
})

// quiz : can you use Array.from(mySet) to convert set into an array
// ans) we can
// let arru = Array.from(mySet);
// console.log(arru);