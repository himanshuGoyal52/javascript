const uno = () => {
    console.log("I am one");
}
/************************* */
const dos =  () => { 
    // non-blocking
    setTimeout(()=>{
        console.log('Woohooo');
    },3000)
    console.log("I am two");
}

/****************************** */
const tres = () => {
    console.log("I am three");
}

uno()
dos()
tres()


/////////////// console /////////////
/*
> I am one
> I am two
> i am three
> Woohoo
*/