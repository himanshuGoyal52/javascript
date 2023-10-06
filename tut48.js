console.log("regular exp , character sets (Tut-48)");
// Regulare Expression:
    // Basic Functions
    // Metacharacter symbols
    // Character sets

// character sets : []
// const regex = /^h/i;
let regex = /H[ryi]rry/; // r,y,i mai se koi bhi ho to match
regex = /H[^ryi]rry/; // expect r,y,i mai se koi bhi ho to match // negation of above
regex = /H[a-z]rry/; // any thing between a to z
// we can also apply multiple character sets
regex = /H[a-z]rr[yu]/;
regex = /H[a-zA-Z0-8]rry/; // includes all chara form a to z and A to Z

// Quantifiers
regex = /Har{2}y/;  // 'r' can occure strictly 2 times
regex = /Har{1,2}y/;  // 'r' can occure strictly 2 and 1 times

// Groupings - we use paranthesis for groupings()
regex = /(har){2}/; // har occurs two times

regex = /(har){2}([0-9]r){3}/;

const str = "Harry bhai harhar5r7r1r";  // this is variable according to regex

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