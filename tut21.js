/*
you have to create a div and inject it into the page which contains a 
heading.
Whenever somone clicks on the div , it should be converted into an editable 
item. whenever user click away (blur) . save the note into the local
storage.

*/

let space = document.getElementById("edit");

space.addEventListener('click',function(e){
    let text = window.prompt("Enter the text you want");
    space.innerText = text;
    localStorage.setItem("text" , text);
})

space.innerText = localStorage.getItem("text");