console.log('This is tut 47');

let regex = /harry/; // regular expresion litral

// lets look into some meta characters symbols

// 1. ^ means expression will match if strings stars with harry is 
regex = /^harry is /;  // (carats)(^) means starts from ha

// 2. $ at the end of the string means "string ends with"
regex = /code with harry$/;

//3.
regex = /ha..y/;  // matches any one character in place of .

// 4. matches any 0 or more character
regex = /h*rry/;

//5. characher ahead ? is optional if it present then too good and if not present then good :)
regex = /ha?rryi?/;

// 6. escape(\) : \* means real * not 4 mata character
regex = /h\*rry/;
// let str = "h*rry means gandu";



let str = 'harry is a good boy and happy is code with harry';

let result = regex.exec(str);
console.log(result);

if(regex.test(str)){
    console.log(`The string "${str}" matches the expression ${regex.source}`)
}else{
    console.log(`The string "${str}" does not matches the expression ${regex.source}`)
}