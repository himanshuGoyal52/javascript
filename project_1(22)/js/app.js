console.log("Welcome to Nodes app");

showNotes();

// if user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click',function(e){
    let addTit = document.getElementById("addTit");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if(notes == null){
        notesObj = {};
    }else{
        notesObj = JSON.parse(notes);
    }
    // notesObj.push(addTxt.value);
    notesObj[addTit.value] = addTxt.value;
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    addTxt.value = "";
    addTit.value = "";
    showNotes();
});

// deleting a note // function
function deleNote(key){
    let notes = localStorage.getItem("notes");
    let notesObj;
    // let hata = JSON.stringify(key);
    if(notes == null){
        notesObj = {};
    }else{
        notesObj = JSON.parse(notes);
    }
    // notesObj.splice(index,1);
    delete notesObj[key];

    localStorage.setItem('notes',JSON.stringify(notesObj));

    showNotes();
}


//Showin notes
function showNotes(){
    let notes = localStorage.getItem("notes");
    let notesObj;
    if(notes == null){
        notesObj = {};
    }else{
        notesObj = JSON.parse(notes);
    }
    let html = "";

    for(let key in notesObj){
        // console.log(`${key} value is ${notesObj[key]} `);
        html+= `
         <div class="noteCard card m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${key}</h5>
                <p class="card-text"> ${notesObj[key]}</p>
                <button  class="deleNote btn btn-primary" id="${key}" onclick="deleNote(this.id)">Delete</button>
            </div>
         </div>
        `;
    }
    

    // notesObj.forEach(function(element,index){
    //     html+= `
    //     <div class="noteCard card m-2" style="width: 18rem;">
    //     <div class="card-body">
    //     <h5 class="card-title">Note ${index+1}</h5>
    //     <p class="card-text"> ${element}</p>
    //     <button  class="deleNote btn btn-primary" id="${index}" onclick="deleNote(this.id)">Delete</button>
    //     </div>
    //     </div>
        
    //     `;
    // });

    let notesEle = document.getElementById("notes");
    var size = Object.keys(notesObj).length;
    if(size != 0){
        notesEle.innerHTML = html;
    }else{
        notesEle.innerText = "You did not add any note upto now";
    }
}


/**************** Searching the text *****************/
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener('input',function(e){
    let inputVal = searchTxt.value;
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cartTxt = element.getElementsByTagName('p')[0].innerText;
        if(cartTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})


/*
Further Features : 
1. Add title:
2. Mark a note as important
3. separate note by user
4. sync with server and host // nahi karuga
*/