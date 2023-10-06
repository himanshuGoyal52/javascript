// Constructors
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display(){

}
let sl=1;

// adding methods to display prototype
Display.prototype.add = function(book){
    let tableBody = document.getElementById("tableBody");
    let uiString = `
    <tr>
        <th scope="row">${sl}</th>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>
    `;
    sl += 1;
    tableBody.innerHTML += uiString;
}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
Display.prototype.show = function(state){
    let msg = document.getElementById("msg");
    if(state === 'success'){
        // console.log("Book added successfully");
        msg.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Successfully !!</strong> added book that you want to add
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        setTimeout(() =>{
            msg.innerHTML = ``;
        },2000)
    }else if(state === 'error'){
        // console.log("Book name and author name should be greater than 2");
        msg.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error !!</strong> book name and author name should be of length greater than two
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        setTimeout(() =>{
            msg.innerHTML = ``;
        },2000)
    }
}
Display.prototype.validate = function(book){
    let name = book.name;
    let author = book.author;
    if(name.length > 2 && author.length > 2){
        return true;
    }else{
        return false;
    }
}


// Add submit event listenier to form (id=libraryForm)
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit' , libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let fiction = document.getElementById("fiction");
    let cp = document.getElementById("cp");
    let novel = document.getElementById("novel");
    let type;
    if(fiction.checked){
        type = fiction.value;
    }else if(cp.checked){
        type = cp.value;
    }else if(novel.checked){
        type = novel.value;
    }
    let book = new Book(name,author,type);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success');
    }else{
        // Showing error to the user
        display.show('error');
    }

}


/* To Do's */
/*
1. store all the date to the localStorage
2. add an delete book option
3. add a scroll bar to the view
*/