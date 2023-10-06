console.log("fetch() API");

// less use of xhr and we are only using fetch() for requests

let myBtn = document.getElementById("mybtn");
let content = document.getElementById("content");

// two .then() because 
/*
function getData(){
    console.log("Started getData()");
    let url = 'harry.txt';
    // fetch is async
    fetch(url).then((res) =>{
        console.log("Inside first then")
        return res.text();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    }).catch((error)=>{
        console.log("some error occured");
    })
}


console.log("Before running get data");
getData();
console.log("After running get data");
*/

// fetching json data

function getData(){
    let url = 'https://api.github.com/users';
    // fetch is async
    fetch(url).then((res) =>{
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((error)=>{
        console.log("some error occured");
    })
}

getData();

// post method
function postData(){
    let url = 'https://dummy.restapiexample.com/api/v1/create';
    let data = {"name":"Himu","salary":"50LPA","age":"20"};
    let params = {
        method : 'post',
        headers : {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body : JSON.stringify(data)
    }
    // fetch is async
    fetch(url,params)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error)=>{
        console.log("some error occured");
    })
}
postData();