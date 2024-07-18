//*************************    Function  ******************************* */

function calculateCardprise (...num){
    return num
}
console.log(calculateCardprise(100,200,300));  //   [ 100, 200, 300 ]


function calculateCardPrise (val1,val2,...num){
    return num              // We just return num
}
console.log(calculateCardPrise(100,200,300,400,500));  // [ 300, 400, 500 ]


const user = {
    name : "Animesh",
    price : 2000
}

function usifo (anyObj){
    console.log(`${anyObj.name} is your name and Your onject's prise is ${anyObj.price}`);
}
usifo(user)


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));