const hitesh = {
    firstName : 'Hitesh',
    lastName : "Goyal",
    role : "Admin",
    courseCount : 3,
    getInfo : function (){
        console.log(`
            Name is ${this.firstName} ${this.lastName}
            His role is ${this.role} 
            and he is studying ${this.courseCount} courses
        `)
    }
}

const dj = {
    firstName : 'Himanshu',
    lastName : 'DJ',
    role : 'Sub-Admin',
    courseCount : 4,
}

// hitesh.getInfo();
// dj.getInfo();  // error

// bind
var djInfo = hitesh.getInfo.bind(dj);

hitesh.getInfo();
djInfo();

// hitesh.getInfo.call(dj);