const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Task is complited");
    }, 1000)
    resolve()
})

promiseOne.then(function(){
    console.log('This is also completed');
})
//************************************************************* */
new Promise(function(resolve, reject){

    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Task No 2');
    }, 1000);
    resolve();
}).then(function(){
    console.log('This is also a task and completed it'); 
})
// ********************************************************************** */

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName : "chai", email : "chai@gmail.com"});
    },1000)
});

promiseThree.then(function(user){
    console.log(user);
})

// **************************************************************** */

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false
        if (!error){
            resolve({userName : 'Animesh', Password : '123'});
        }else{
            reject('ERROR : Somthing went wrong!')
        }
    },1000);
});

promiseFour
.then(function(user){
    console.log(user);
    return user.userName;
})
.then( (userName) => {
    console.log(userName);
})
.catch((error) => {
    console.log(error);
})
.finally( () =>{
    console.log("The promise is either resolved or rejected")
})

//************************************************************************************************ */

const promiseFive = new Promise( function(resolve, reject){
    setTimeout(function(){
        const error = true
        if (!error){
            resolve({userName : 'Animesh', Password : '123'});
        }else{
            reject('ERROR : Somthing went wrong!')
        }
    },1000);
});

async function consumePromiseFive (){
    try {
        const responce = await promiseFive;
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive()

//********************************************************************************************** */


async function getAllUser() {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(responce);
        const data = await responce.json()
        console.log(data);     

    } catch (error) {
        console.log('E', error);
    }
}

getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=> console.log(error))
