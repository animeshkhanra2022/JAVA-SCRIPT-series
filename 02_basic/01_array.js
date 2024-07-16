//   *********************  ARRAY  **************************

const myArr = [9,6,3,5,8,4]
console.log(myArr);
console.log(myArr[1]);
console.log(myArr[5]);

const myArr2 = new Array('A','n','i','e','m','s','h')
console.log(myArr2);

// *****************Array methods********

myArr.push(1)
myArr.push(2)
myArr.push(7)
myArr.pop()

myArr.unshift(7)
myArr.shift()
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   //^ slice not manipulated original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    //^ slice manipulated original array

console.log("C ", myArr);
console.log(myn2);