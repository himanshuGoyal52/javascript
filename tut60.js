console.log('We are doing Destructuring in javaScript');

let a,b;
[a,b] = [34,568];
console.log(a,b);

// Array destructuring 
[a,b,c,...d] = [1,2,3,4,5,6,7,8];
console.log(a,b,c,d);

({a,b,c,...d} = {a : 34,b : 345,c : 67 , d : 45 , e : 34})
console.log(a,b,c,d);

const fruits = ['apple','Bananas' , 'Mangoes'];
[a,b,c] = fruits;
console.log(a,b,c);

// Object Destructuring
let laptop = {
    model : 'HP Pavilion',
    age : '23 days',
    gender : 'Male',
    net : 65132,
    start : function(){console.log('Staring you laptop')}
}

const {model , age , gender2 , start} = laptop;
console.log(model,age,gender2);
start()