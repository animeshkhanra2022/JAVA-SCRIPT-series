const number = 400

let score = new Number(100)
console.log(score.valueOf());

if (score.valueOf() === '100') {
    console.log("the number is 100");
}else
 console.log("the number is not 100");

console.log(score.toFixed(2));

let balance = 100000000
console.log(balance.toLocaleString());

// ********************* math ****************************

console.log(Math.abs(-235))

const max = 9999
const min = 1000

let num = Math.random()
// console.log(num)
// console.log(num * 100 )

console.log(Math.floor((num*(max-min) + 1) + min)) ;
console.log(Math.ceil((num*(max-min) + 1) + min)) ;


