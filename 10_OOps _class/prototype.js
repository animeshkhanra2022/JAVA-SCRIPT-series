let myHeros = ["thor", "spiderman"]

// const sita = function ram (){
//     console.log("I am also in.");
// }


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is : ${this.spiderman}`);
        
    }
}

Object.prototype.animesh = function(){
    console.log('Animesh is present in all object.');   
}

// Object.prototype.hayAnimesh = function(){
//     console.log('Animesh is saying hay');   
// }

// Array.prototype.hayAnimesh = function(){
//     console.log('Animesh is saying hay');   
// }

Function.prototype.hayAnimesh = function(){
    console.log('Animesh is saying hay');   
}

// heroPower.getSpiderPower()

// heroPower.animesh()


// myHeros.animesh()

// heroPower.hayAnimesh()
// myHeros.hayAnimesh()



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length Is : ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
'Animesh'.trueLength()

//&               inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// mordernMethod
Object.setPrototypeOf(TeachingSupport, Teacher)