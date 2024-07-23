// for of 


// const arr = [9, 8, 7, 6, 5]

// const arr = ['ani', 'talu', 'nami']

// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "hello world"

// for (const greet of greetings) {
//     if(greet === " "){
//         continue
//     }
//     console.log(`The greets are : ${greet}`);
// }


//***********   map    ************* */

const map = new Map()
map.set('IN', 'India')
map.set('FR', 'France')
map.set('USA', 'United State of America')
map.set('UK', 'United Kingdom')
map.set('FR', 'France')

// console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value} `);
// }



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}    // it dose not work because it has separate method

