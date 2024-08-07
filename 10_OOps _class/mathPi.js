// const discipter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(discipter);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const chai = {
    name: 'gingerChai',
    price : 120,
    isAvaiable : true,

    orderChai : function(){
        console.log("chai ekhano hoyni");
    }

}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// console.log(chai.name);
// chai.name = "Animesh"
// console.log(chai.name);

Object.defineProperty(chai, 'name', {
    Writable: false,
    enumerable: false,
    configurable: false
})

console.log(chai.name);
chai.name = "Animesh"
console.log(chai.name);

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
