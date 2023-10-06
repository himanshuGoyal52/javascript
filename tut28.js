// object literal : object.prototype
let obj = {
    name : "happy",
    channel : "Himanshu Goyal",
    address : "Mars",
}

// constructor have their own prototype
function objject(givenName , givenChannel , givenAddress){
    this.name = givenName;
    this.channel = givenChannel;
    this.address = givenAddress;
}

objject.prototype.getName = function ( ){
    return this.name;
}
objject.prototype.setName = function (givenName){
    this.name = givenName;
}

/***************** Error ******************/
// obj.prototype.getName = function ( ){
//     return this.name;
// }
/***************** Error ******************/

/********************* don't do this *****************/
/* Object is default constructor of brower so do not change its prototype */
// Object.prototype.getName = function(){
//     return "Gandu";
// }

let obj2 = new objject("Harsh" , "Pub_G", "jaipur");
console.log(obj2);