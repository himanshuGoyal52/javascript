const uno = () => {
    // console.log("I am one");
    return 'I am one';
}
/************************* */
// const dos =  () => { 
//     // non-blocking
//     await setTimeout(()=>{
//         return 'I am two';
//     },3000)
    
// }


const dos =  () => { 
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            resolve('I am two');
        },3000)
        // setTimeout(() => {
        //     reject('I am who');
        // },3000)
    })
}

/****************************** */
const tres = () => {
    return 'I am three';
}

const callMe = async () => {
    let valOne = uno()
    console.log(valOne); 

    let valTwo = await dos();  // undifined
    console.log(valTwo);  

    let valThree = tres();
    console.log(valThree);
}

callMe();