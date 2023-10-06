console.log('Hello there');

const userName = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');

let validName = false;
let validEmail = false;
let validPhone = false;

// console.log(userName,email,number); // checking 

// name validation
userName.addEventListener('blur',()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,20}$/;
    let nameStr = userName.value;

    if(regex.test(nameStr)){
        userName.classList.remove('is-invalid');
        validName = true;

    }else{
        userName.classList.add('is-invalid');
        validName = false;
    }

});
// email validation
email.addEventListener('blur',()=>{
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,20}$/;
    let emailStr = email.value;

    if(regex.test(emailStr)){
        email.classList.remove('is-invalid');
        validEmail = true;
    }else{
        email.classList.add('is-invalid');
        validEmail = false;
    }
});
// number validation
number.addEventListener('blur',()=>{
    let regex = /^([0-9]){10}$/;
    let numberStr = number.value;

    if(regex.test(numberStr)){
        number.classList.remove('is-invalid');
        validPhone = true;
    }else{
        number.classList.add('is-invalid');
        validPhone = false;
    }
}); 


let submit = document.getElementById('sbmt');
submit.addEventListener('click' , (e)=>{
    // submit your form here
    e.preventDefault();

    let success = document.getElementById('success');
    let failure = document.getElementById('failure');
    if(validEmail && validName && validPhone){
        success.classList.add('show');
        failure.classList.remove('show');
        // jQuerry
        // $('#failure').alert('close');
        // $('#failure').hide();
    }else{
        failure.classList.add('show');
        success.classList.remove('show');

        // $('#success').alert('close');
    }
});