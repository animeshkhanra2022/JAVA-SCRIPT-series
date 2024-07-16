// ***************************  OBJECTS *****************************

// object literals

const mySym = Symbol("key1")

const obj = {
    name : "Animesh",
    "full name": "Animesh Khanra",
    [mySym]: "mykey1",
    age : 21,
    adhaarNo : 123478964568
}

console.log(obj);            //^ { name: 'Animesh', age: 21, adhaarNo: 123478964568 }
console.log(obj.name);       //^ Animesh
console.log(obj.age);        //^ 21
console.log(obj.adhaarNo);   //^ 123478964568
console.log(obj["full name"])   //^ Animesh Khanra
console.log(obj[mySym])             //^ mykey1


obj.name = "Kanika"
console.log(obj);         //^ { name: 'Kanika', age: 21, adhaarNo: 123478964568 }

// Object.freeze(obj)       //! we freeze here the object
obj.name = "Shakti" 
console.log(obj);       //^ { name: 'Kanika', age: 21, adhaarNo: 123478964568 } 



obj.greeting = function(){
    console.log("Hello JS user");
}
obj.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(obj.greeting());
console.log(obj.greetingTwo());