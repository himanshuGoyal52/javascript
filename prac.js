function makeRequest(loaction){
    return new Promise((resolve,reject)=>{
        console.log(`Making request ot ${loaction}`)
        if(loaction === 'Google'){
            resolve('Google says hi')
        }else{
            reject('We can only talk to Google');
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('Processing response');
        resolve(`Extra informaiton + ${response}`);
    })
}

makeRequest('fac').then((res)=>{
    console.log(res);
    return processRequest(res)
}).then(processResponse => {
    console.log(processResponse);
}).catch(err=>{
    console.log(err);
})