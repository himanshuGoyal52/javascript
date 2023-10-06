console.log('Regular expression and realted functions');

// between two back slash string is a regular expression
let reg = /harry/g; // this is a regular expression literal in js
reg = /harry/i; // i means case insensitive // ex : Harry , haRRy all will work
// g : is a flag(means global)

console.log(reg);
console.log(reg.source);

let str = "This is a great code with hArry and also harry bhai";
// functions to match expressions
// 1. exec() - This function will return an array for match or null for no match.
let result = reg.exec(str);
console.log(result);
result = reg.exec(str); // after putting flag g in the reg
console.log(result);
// result = reg.exec(str); // null
// console.log(result); --> we can use multiple exec with global flag

// 2. test() -> returns true or false
let result1 = reg.test(str);
console.log(result1);  

//3. match() -> it will return an arry of results or null
let result2 = str.match(reg);
console.log(result2);
// try this : let str = "This is a great code with harry and also harry bhai";

//4. search() -> returns index of first match else -1
let result3 = str.search(reg);
console.log(result3);

//5. replace() -> returns new replaed stirng with all the replacemnts (if no flag is given first match will be replaced)
let result4 = str.replace(reg,'HIMANSHU');
console.log(result4);

// why ? regular expression : ans)