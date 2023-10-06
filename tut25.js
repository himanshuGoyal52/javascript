let divElement = document.createElement('div');

let container = document.querySelector(".container");
let myFirst  = document.getElementById('firstChild');

let val = localStorage.getItem('text');
let textElement;
if(val === null){
    textElement = document.createTextNode("This is my element , click to edit it");
}else{
    text = document.createTextNode(val);
}
divElement.setAttribute('id' , 'elem');
divElement.setAttribute('style' , 'border:2px solid black; width:154px; margin:34px; padding:23px;');
divElement.setAttribute('class' , 'elem');

// inserting the element 
divElement.appendChild(textElement);
container.insertBefore(divElement,myFirst);

// Adding event listner
divElement.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName("text_area").length;
    if(noTextAreas == 0){
        let html = divElement.innerText;
        divElement.innerHTML = `<textarea class="text_area" id="textarea">${html}</textarea>`;
    }
    // listen for the blur event on the text area
    let text_area = document.getElementById("textarea");
    text_area.addEventListener('blur',function (){
        divElement.innerHTML = text_area.value;
        localStorage.setItem('text' , text_area.value);
    })
});


