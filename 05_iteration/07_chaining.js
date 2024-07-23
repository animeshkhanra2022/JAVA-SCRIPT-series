const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let myNums = nums.map( (numb) => numb * 10)
            .map( (newnum) => newnum + 1 )
            .map( (newnum) => newnum + 5 )
            .filter( (newnum) => newnum > 55 )

console.log(myNums);