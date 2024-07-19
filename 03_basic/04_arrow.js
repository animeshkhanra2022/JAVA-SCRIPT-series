const user = {
    username: "Animesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Ani"
user.welcomeMessage()

console.log(this);          //^ print just empty object.

// ------------------------------------------------------------------

function chai(){
    let username = "Animesh"
    console.log(this.username);  // in simple function this dose not work
}
chai()


function chai(){
    let username = "Animesh"
    console.log(this.username);       // undefined
    console.log(this);  // in simple function this work
}
chai()


//~ this is an arrow function 

// const chai = () => {
//     let username = "Animesh"
//     console.log(this.username);       // {}
//     console.log(this);  // in simple function this work
// }
// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 );
// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(2,6))
