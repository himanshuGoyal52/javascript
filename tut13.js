// Exercise 1
/* You have to create a variable which is a string containing the text 
which is a link you are interested in. */

/* You have tofetch all the links from a given page which contains
this text */

let a = document.links;
console.log(a);
let ans=[];
let j = 0;

let text = "index";


for(let i = 0 ; i < a.length ; i++){
    if(a[i].href.includes(text)){
        ans[j] = a[i];
        j++;
    }
}

for(let i = 0 ; i < ans.length ; i++){
    console.log(ans[i].href);
}