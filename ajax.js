console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    // open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1' , true); //(mehtod , file/path , async or sync)

    // use this for post request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create' , true); //(mehtod , file/path , async or sync)
    xhr.getResponseHeader('Content-type' , 'application/json');

    // what to do on progress (Optional)
    xhr.onprogress = function(){
        console.log("On Progress ... ");
    }

    // On ready state change
    // xhr.onreadystatechange = function (){
    //     console.log("ready state is ",xhr.readyState);
    // }

    // what to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            console.log(JSON.parse(this.responseText));
        }else{
            console.error("Some error occured");
        }
    }

    let params = `{"name":"ko","salary":"123","age":"23"}`;
    // send the request 
    xhr.send(params);

    console.log("We are done");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click' , popHandler);

function popHandler(){
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    // open the object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees' , true); //(mehtod , file/path , async or sync)

    // what to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let list = document.getElementById("list");
            let obj = JSON.parse(this.responseText);
            // console.log(obj.data);

                
            let str = "";
            // let emp = obj.data;
            // console.log(emp);
            for (key in obj){
                str += `<li>${obj['data'][0].employee_name}</li>`;
            }
            list.innerHTML = str;
        }else{
            console.error("Some error occured");
        }
    }

    // send the request 
    xhr.send();

    console.log("We are fetching employees");
}