let btn = document.getElementById('btn');

btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown' , func3);

function func1(e){
    console.log("Thanks" ,e);
    e.preventDefault();
}

function func2(e){
    console.log("Thanks Again" ,e);
    e.preventDefault();
}

function func3(e){
    console.log("Thanks its a mouse down event",e);
    e.preventDefault();
}

/* Events 
1. Mouse Enter
2. Mouse Leave
*/

// document.querySelector('.childul').addEventListener('mouseenter',function (){
//     console.log("You entered childul");
// });

// document.querySelector('.childul').addEventListener('mouseleave',function(){
//     console.log("You exited childul");
// });

/****************************************************/

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log("You triggered mouse move event");
    console.log(e.offsetX , e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;
});