let name1 = "SkillF";
let name2 = "Sahil";

// function greet(name , Thank ="Thanku you gandu"){
//     console.log(`Happy Birthday ${name} they say that first impressions make a lasting impression 
//     and that how you greet someone can set the groundwork for your 
//     relationship. The same is true to blogging. How are you greeting 
//     your blog visitors? Are you friendly? Overwhelming? Trustworthy? 
//     Are you someone that they want to be friends with? ${Thank}`); 
//     return 'HG';
// }
const greet = function (name , Thank ="Thanku you gandu"){
    console.log(`Happy Birthday ${name} they say that first impressions make a lasting impression 
    and that how you greet someone can set the groundwork for your 
    relationship. The same is true to blogging. How are you greeting 
    your blog visitors? Are you friendly? Overwhelming? Trustworthy? 
    Are you someone that they want to be friends with? ${Thank}`); 
    return 'HG';
}

greet(name1 , "Thanku you chutiye");
// greet(name2);
let val = greet("Anushka");
console.log(val);

const myObj = {
    name : "Jatin",
    game : "GTA",
    fame : false,
    time : function(){
        let date = new Date();
        return date;
    }
}
console.log(myObj.time());

/************* Scope *************/
// let/const has block level scope but var has function level scope //
// Use let and const //
if(1){
    // let i = 23;
    var i = 124;
    console.log(i);
}
console.log(i);
function Scope(name){
    let i = 9;
    console.log(i);
    return `This is a ${name}`;
}
console.log(Scope('Kushal Sharma') , i);