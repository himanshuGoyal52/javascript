// callback functions + promise

// I am running a online school and my students are going to be enroll

// assume that the students array is comming from server(pretend karo)
const students = [
    {
        name : "harry",
        subject : "javaScript"
    },
    {
        name : "happy",
        subject : "c++"
    },
    {
        name : "Aayush",
        subject : "Solidity"
    },
];

// let assume that the request to server is taking time of 3 second ... thats why we are using setTimout
function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log('student has been enrolled');
            // callback();
            const error = false;
            if(!error)
                resolve();
            else
                reject();
        },3000);

    })
}
/*------------------------------------------*/
function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function (student){
            str += `<li>${student.name} , ${student.subject}</li>`
        });
        document.getElementById("students").innerHTML = str;
        console.log('students are displayed');
    },1000);
}

// enrolling a student
let std={
    name : 'sakshi',
    subject : 'hardhat',
}
enrollStudent(std ).then(getStudents).catch(function(){
    console.log("some error occured");
}); // getting students when enrolling is done
// getStudents();
/*-------------------------------------------------------*/
/*-------------------------------------------------------*/
// callback : function ke ander function
// ex : 
// students.forEach() : forEach function taking a callback fuction as an input


/*
NOTES : 
i) firstly setTimeout of enrollstudent is taking 3s and getStudents is taking 1s
ii) secondly reversing the time.
ii) in first case we have to give callback function to a enrollstudent()
*/

/* quick quiz */
