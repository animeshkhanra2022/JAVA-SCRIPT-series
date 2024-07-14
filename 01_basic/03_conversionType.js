// *********************Conversion of data Type **************************
//             number to string / boolean / number conversion 

let score = 0
console.log(typeof score);

let convScore = Number(score)
console.log(typeof convScore);
console.log(convScore);

// convert to string **************************

let convStr = String(score)
console.log(typeof convStr);
console.log(convStr);

// convert to BOOLEAN **************************

let convBo = Boolean(score)
console.log(typeof convBo);
console.log(convBo);

//~  NOTE 
//? IF NUMBER IS 1 OR MORE 1 VALUE => TURE
//? IF NUMBER IS 0  => FALSE

// -------------------------String to string / boolean / number conversion-------------------

let a = "33asd"
console.log(typeof a)

// convert to number .........................
let convA = Number(a)
console.log(typeof convA);
console.log(convA);

//~ note *********
//? "33asd" => NaN (Not a Number)

// convert to boolean .........................

let convBool = Boolean(a)
console.log(typeof convBool);
console.log(convBool);

//~  NOTE ....................
//?  IF NUMBER IS 1 OR MORE 1 VALUE or any STRING VALUE => TURE
//? IF NUMBER IS 0  => FALSE

console.table([convStr,convBo,convScore,convA,convBool])


//  ****************SUMMERY OF DATA TYPE ***********************
//~ PREMETIVE --------------------------=>
// Data Types are - String , number , boolean, null , undefine, symbole, bigInt

// ~NON PRIMITIVE OR REFERENCE-------------
// Array , Object , Functions

