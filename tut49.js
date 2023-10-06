console.log("Shorthad character classes (Tut-49)");

// Character classes
let regex = /\warry/; // (\w) means word character : _ or alphabet or number
regex = /\w+ry/;      // (\w+) means multi word character
regex = /\Wis/;       // non word character
regex = /\W+is/;      // non word character
regex = /\d99/;       // any digit
regex = /\d+99/;      // mutliple digit
regex = /\D99/;       // any non digit
regex = /\D+99/       // multiple non digit
regex = /\s\(code/;   // match white space character
regex = /\s+\(code/;  // multiple white space
regex = /\S\(code/;   // non white space
regex = /\S+\(code/;  // multiple no white space
regex = /best\b/;     // word boudary
// Assertions
regex = /h(?=a)/; // h ke badd jnha bhi a hoga match ho jaye ga
regex = /h(?!=u)/;

let str = "code with harry )(&%is the best channel for learing coding from starch (code with harry .com) 7999z999";


/*******************************************/
let result = regex.exec(str);
console.log(result);
/*******************************************/

/*******************************************/
if(regex.test(str)){
    console.log(`The string "${str}" matches the expression ${regex.source}`)
}else{
    console.log(`The string "${str}" does not matches the expression ${regex.source}`)
}
/*******************************************/