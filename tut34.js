console.log("We are starting async programming");

setTimeout(() => {
    for (let i = 0; i < 40; i++) {
        const element = i;
        console.log("This is index number ",element);
    }
}, 1000);

// first this will run
for (let i = 0; i < 2; i++) {
    const element = i;
    console.log("This is index number ",element);
}

console.log("Done Printing");