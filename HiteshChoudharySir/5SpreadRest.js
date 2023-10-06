function sumTwo(a,b,...agrs){  // REST opearator
    console.log(agrs);
    let sum = 0;
    let pro = a*b;
    for(const arg of agrs){
        sum += arg;
    }
    return [sum , pro];
}

console.log(sumTwo(1,2,3,4,5,6)); 
