document.getElementById("heading").addEventListener('click' , 
function(e){
    console.log("You have clicked the heading");
    let variable;
    variable = e.target;
    // variable = e.target.id;
    // variable = e.target.className;
    // variable = e.target.classList;
    // variable = e.offsetX;
    // variable = e.offsetY;

    // variable = e.clientX;
    variable = e.offsetY;

    console.log(variable);
    // location.href = "https://geetsfashionwear.herokuapp.com";
});

// events
/*
1. mouseover
2. 
*/