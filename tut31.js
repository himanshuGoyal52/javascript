// classes

class Employee {
    constructor(name,experience,division){
        this.name = name;
        this.experience = experience;
        this.division = division; 
    }
    slogan(){
        return `I am ${this.name} and my division is ${this.division} and this company is the best`;
    }
    joiningYear(){
        let year = new Date();
        year = year.getFullYear();
        return year - this.experience;
    }
    // we can use this addTwo function without making any object of this class
    static addTwo(a,b){
        return a+b;
    }
}

let harry = new Employee("harry" , 5 , "SDE");
// console.log(Employee.addTwo(15,15));

console.log(harry);

//--------- Inheritance ---------//
class Programmer extends Employee{
    constructor(name , experience , division , language , gitHub){
        // super ka matlab last class ke constructor ko call krr do
        super(name , experience , division);
        this.language = language;
        this.gitHub = gitHub;
    }
    favLanguage(){
        if(this.language == "Python"){
            return "Python";
        }else{
            return "JavaScript";
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

let rohan = new Programmer('Rohan' , 15 , "SDE" , "Go" , "Rohan420"); 
console.log(rohan.favLanguage());
console.log(Programmer.multiply(1221 , 2112));

let arrr = [11,5,20,13,4,59,70,02,96,69];