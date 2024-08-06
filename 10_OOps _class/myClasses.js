
// class user {
//     constructor(userName, email, password) {
//         this.userName = userName;
//         this.email = email
//         this.password = password
        
//     }
//     encriptPassword (){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `New user name is : ${this.userName.toUpperCase()}`
//     }
// } 

// const chai = new user('chai', 'ahai@gmail.com', 1234);

// console.log(chai);
// console.log(chai.encriptPassword());
// console.log(chai.changeUsername());


//!     BEHIND THE SCENE  ----------------------------------

function User (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encripted= function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User('Tea', 'tea@gmail.com', 'animesh@123')

console.log(tea.changeUsername());
console.log(tea.encripted());
