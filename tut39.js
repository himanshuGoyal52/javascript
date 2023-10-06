console.log("we are learing promises aka kasam");
/* Promise : harry bhai bol rahe hai ki I will provide best video on javaScript of promises 
          possiblity
Promise - resolve
Promise - reject
Promise - pending
*/

function func1(){
    return new Promise(function(resolve,reject){
        // xhr , requests
        setTimeout(() =>{
            const error  = true;
            if(!error){
                console.log("Function : Your promise has been resolved");
                resolve();
            }else{
                console.log("Function : Your promise is not resolved");
                reject("Sorry not fulfilled");
            }
        },2000);
    })
}


func1().then(function (){
    console.log("Harry : Thanks for resolving");
}).catch(function (error){
    console.log("Harry : Sorry some error occured " + error);
});

// .then() : if resolve then
// .catch() : if reject then

// story : func1 is making an promise if done then resolve and if not then reject


/**
 then ke ander jo function dete hai vo reslove() hota hai
 aur catch ke ander jo function dete hai vo reject() hota hai
 */

 /*
 function insed then is ran as reslove
 function inside catch is ran as reject
 */