const proto = {
    slogan : function(){
        return `This company is the best`;
    },
    changeName : function(newName){
        this.name = newName;
    }
}

const harry = Object.create(proto);
harry.name = "happy";
harry.role = "Programmer";
harry.changeName('happpy');
console.log(harry);

const happy = Object.create(proto,{
    name : {value:"harry" , writable : true},
    role : {value:"programmer"}
})
happy.changeName('harrry');

console.log(happy);


// prototype inheritance in javaScript
// Employee constructor
function Employee(name , salary , experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// slogan //
Employee.prototype.slogan = function(){
    return `This company is the best. regards ${this.name}`;
}

let happy_emp = new Employee("happy" , 500000 , 50);
console.log(happy_emp);

// Programmer
function Programmer(name ,salary,experience, language){
    Employee.call(this,name,salary,experience);
    this.language = language;
}

// adding prototype of employee in programmer //
Programmer.prototype = Object.create(Employee.prototype);
// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let Aayush = new Programmer("giri" , 5000000, 45 , "c++");
console.log(Aayush);

// we do not use these prototype instead we use es6 classes //