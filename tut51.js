console.log("Iterators in JavaScript");
// Iterators


function fruitsIterator(values){
    let nextIndex = 0;
    // we will return an object
    return {
        next : function(){
            if(nextIndex < values.length){
                // we will return below obj
                return {
                    value : values[nextIndex++],
                    done : false
                }
            }else{
                // we will return below object with only done
                return {
                    done : true,
                }
            }
        }
    }
}
const myArray = ['apples','Grapes','Oranges','Bhindi'];
// console.log(myArray);

const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);