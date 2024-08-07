class user {
    constructor(username, password){
        this.username = username;
        this.password = password
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
        this._username = value;
    }
    get password(){
        return `${this._password.toUpperCase()}abcd`
    }

    set password(value){
        this._password = value;
    }

    
}

const chai = new user('animesh', 'animesh@123')
console.log(chai.password)
console.log(chai.username);

