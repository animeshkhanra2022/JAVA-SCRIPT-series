const accountId = 993342;
let accountName = 'Animesh';
var accountPassword = '12345';
let accountState;

accountCity = 'medinipur';  // don't do like this.

// we can't change it where it is define as constant.
// accountId = 8
// console.log(accountId);

// we can change it 2nd time.
accountName = 'Bikash';
console.log(accountName);

console.log();

// Here also we can change it 2nd or further time.
accountPassword = 'ani';
console.log(accountPassword);

console.log();
// Here also we can change it 2nd or further time.
accountCity = 'Pur';
console.log(accountCity);

console.log();

// print all in one command.
console.table([accountId,accountName,accountPassword,accountCity,accountState]);

// NOTE------------------------>
/*
Prefer not to use var
because of issue in block scope and functional scope
*/