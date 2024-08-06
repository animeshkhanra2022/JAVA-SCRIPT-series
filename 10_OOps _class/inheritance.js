class User {
    constructor(username) {
        this.username = username;        
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course is design by ${this.username}`);
    }
}

const chai = new teacher('animesh', 'email.com', 'skfjsf@123');
const masalaChai = new User('Kalki')

chai.addCourse()
chai.logMe()

// masalaChai.addCourse();
masalaChai.logMe();

console.log(chai === masalaChai);
console.log(chai instanceof teacher);
console.log(chai instanceof User);

console.log(masalaChai instanceof teacher);
console.log(masalaChai instanceof User);

