console.log('This is tut 8');

const age = '90';
if( age == 19){
    console.log('Age is 19');
}
else if(age == 90){
    console.log('Age is 90');
}
else{
    console.log('Age is not 19');
}
/**************** === ************************/
// === check type and value both 
if( age !== 19){
    console.log('Age is not 19');
}
else if(age === 90){
    console.log('Age is 90');
}
else{
    console.log('Age is not 19');
}

const vari = 34;
if(typeof vari !== 'undefined'){
    console.log('Vari is defined');
}else{
    console.log('Vari is not defined');
}

/********************** Ternery operator *************/
console.log(age == 45 ? 'Age is 45' : 'Age is not 45');

/******************* Switches ********************/
const agee = 30;
switch (agee) {
    case 15: 
        console.log('You are 15');
        break;
    case 20: 
        console.log('You are 20');
        break;
    case 25: 
        console.log('You are 25');
        break;
    case 30: 
        console.log('You are 30');
        break;
    default:
        console.log('You are at chutiya age');
        break;
}