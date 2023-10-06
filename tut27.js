// Object Oriented JavaScript

// Object Literal for creating object 
let car = {
    name : "Maruti 800",
    topSpeed : 100,
    run : function (){
        console.log("Car is running");
    }
}

// we have already seen constructors like these:
// new Date();

// creating a constructor for cars // or we can say that Making an object of GeneralCar
function GeneralCar(givenName , givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} car is running`);
    }
    this.analyze = function(){
        if(this.topSpeed < 150)
            console.log(`This is car is slower by ${150 - this.topSpeed} kmph than mercedes`);
        else if(this.topSpeed == 150)
            console.log(`This is car is of same speed of mercedes`);    
        else
            console.log(`This is car is faster by ${this.topSpeed - 150} kmph than mercedes`);
    }
}


let car1 = new GeneralCar("Nissna" , 180);
console.log(car1);

let car2 = new GeneralCar("Toyota" , 100);
console.log(car2);

// console.log(car);