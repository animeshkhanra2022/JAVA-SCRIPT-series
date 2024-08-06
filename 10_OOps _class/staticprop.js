class User {
    constructor(username){
    this.username = username;
    }
    logMe(){
        console.log(`User name is : ${this.username}`);        
    }
    static createId(){
        return '223'
    }
}

const chai = new User('Animesh')

// chai.logMe()
// console.log(chai.createId())

class Teacher extends User {
    constructor(username, email){
    super(username)
    this.email = email
    }
 }


 const iphone = new Teacher('Aniket', 'ananal@gmail.com')

iphone.logMe()
console.log(iphone.createId())
