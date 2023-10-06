console.log("Error handling in js");

let a = "Haryy bhai"; // pretend this is coming form a server as response
a = undefined;
if (a != undefined){
    throw new Error('This is not undefined'); // custom error
    // console.log('This is not undefined');
}else{
    console.log('This is undefined');
}

// functionHarry(); // functionHarry() is not defined
try {
    functionHarry();
    // null.console()
    console.log("hii , we are inside try block");
} catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
    console.log("Are you okay?");
}finally{
    // allways run
    console.log("finally we will run this");
}
// we use try catch because any error will not stop our code because console.log(error) in catch is text but not error //