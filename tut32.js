// create a class library and implement the following : 
/*
conistructor must take the book list as an arugument
getBookList()
issueBook(bookname,user)
returnBook(bookname)
*/

class library{
    constructor(bookList){
        this.bookList = bookList;
        this.allotedBooks = {};
    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookName,user){
        let index;
        let exist = false;
        let arr = this.bookList;
        for(let i=0;i< arr.length ; i++){
            if(this.bookList[i] === bookName){
                index = i;
                exist = true;
            }
        }
        if(exist){
            this.bookList.splice(index,index); 
            this.allotedBooks[user] = bookName;
            console.log(`Requested book is alloted to ${user}`);
        }else{
            console.log("Requested book does not exists");
        }
    }
    returnBook(bookName , user){
        this.bookList.push(bookName);
        let obj_books = this.allotedBooks;
        delete obj_books[user];
    }
}


let ISM = new library(["gold","spiderman","batman","list","go","risk","somebody",'gifts',"bliss"]);
