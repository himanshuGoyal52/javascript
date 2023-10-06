class User{
    constructor(name , email){
        this.name = name;
        this.email = email
    }
    couseList = [];

    getInfo(){
        return {
            name : this.name,
            email : this.email
        };
    }
    enrollCouse(name){
        this.couseList.push(name);
    }
    getCouseList(){
        return this.couseList;
    }
}

module.exports = User;