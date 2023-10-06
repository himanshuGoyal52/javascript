console.log("async / await - tutorial");

// function harry return also promise and inside this fetch() also return promise 
// await : tum aage ka kaam karo mai aage ka code run krrta hunn jab ho jayega to return ho jayega
// await : jnha await milta hai wnha se vo wapis chala jata hai niche ke code ko run krrne

async function harry(){
    console.log("Inside harry function");

    const res = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await res.json();
    console.log("after response");
    return users;
    // return "harry";
}
// after putting async then harry() function will return a promise
console.log("Before calling harry");
let a = harry();
console.log("After calling harry");
console.log(a); // pending

a.then(data=>console.log(data)); // run when harry function is resloved

console.log("Last line of this js file");