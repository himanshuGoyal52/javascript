function init(){
    var firstName = "Himanshu";
    console.log('I am in init');
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName; // it will not execute but a refernce is passed
}

var value = init();
// console.log(firstName); // undifined
value();


function doAddition(x){
    return function (y){
        return x + y;
    }
}

// var add = doAddition(2);

// var ans = add(19);
// console.log(ans);

console.log(doAddition(19)(1));


////////////// Curring ////////////////////
