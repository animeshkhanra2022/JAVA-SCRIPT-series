const clock = document.getElementById('clock')
const clock1 = document.getElementById('clock1')

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    clock1.innerHTML = date.toLocaleDateString();

}, 1000);


//*** OR YOU CAN DO THIS TYPE ALSO */

// const clock = document.querySelector('#clock')
// const clock1 = document.querySelector('#clock1')

// setInterval(function(){
//     let date = new Date();
//     console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.toLocaleTimeString();
//     clock1.innerHTML = date.toLocaleDateString();
// }, 1000);