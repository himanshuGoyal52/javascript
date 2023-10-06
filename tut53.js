console.log("Generators in JavaScript");

function* numbersGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    // why i = 0;
    while(true){ 
        yield (i++).toString();
    }
}

const gen = numbersGen();
console.log(gen.next()); // 1 ban gaya
console.log(gen.next()); // 2 ban gaya
console.log(gen.next()); // 3 ban gaya
console.log(gen.next()); // 4 ban gaya
console.log(gen.next()); // khatam
console.log(gen.next()); // khatam

// on the fly values of generate krrte hai
