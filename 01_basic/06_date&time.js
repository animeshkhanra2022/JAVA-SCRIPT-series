// ****************************  Date  *****************************

let myDate = new Date()
console.log(myDate);             //output-> 2024-07-16T01:50:31.712Z

console.log(myDate.toString());             //output-> Tue Jul 16 2024 07:22:18 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());         //output-> Tue Jul 16 2024

console.log(myDate.toLocaleString());          //output-> 16/7/2024, 7:24:52 am

console.log(myDate.toISOString());                //output-> 2024-07-16T01:55:57.902Z

console.log(myDate.toLocaleDateString());                //output-> 16/7/2024

console.log(myDate.toTimeString());                //output-> 07:27:06 GMT+0530 (India Standard Time)

console.log(myDate.getTimezoneOffset());                //output-> -330

console.log(typeof myDate);  // this is an object

let myCreatedDate = new Date(2002, 8, 25, 22, 12)

console.log(myCreatedDate);                         //2002-09-25T16:42:00.000Z
console.log(myCreatedDate.toDateString());         // Wed Sep 25 2002
console.log(myCreatedDate.toLocaleString());       // 25/9/2002, 10:12:00 pm

let timeStamp = Date.now()
console.log(timeStamp);

console.log(myCreatedDate.getTime());

console.log(Date.now());            // The value we get in miliseconds
console.log(Date.now()/1000);     // The value we get in seconds but problem is that is point value also
console.log(Math.floor(Date.now()/1000));     // The value we get in seconds {finally}

let newDate = new Date()

console.log(newDate);       // Output -> 2024-07-16T02:28:16.022Z
console.log(newDate.getDate());       // Output -> 16
console.log(newDate.getMonth() + 1);       // Output -> 7
console.log(newDate.getFullYear());       // Output -> 2024
console.log(newDate.getHours());       // Output -> 8