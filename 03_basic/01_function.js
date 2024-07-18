function myFunction(){
    console.log('a');
    console.log('n');
    console.log('i');
    console.log('m');
    console.log('e');
    console.log('s');
    console.log('h');
}

myFunction()

function addTowNumb (number1, number2){
        console.log(number1 + number2);
}
addTowNumb(2,9)

function addTowNumb (number1, number2){
        let result = (number1 + number2);
        return result
}

const resu = addTowNumb(2,9)
console.log(resu);



function userLog (user) {
    return `${user}, you are loged in.`
}
console.log(userLog('Animesh'))



function userLog (user = 'Ram') {
    if(!userLog){
        console.log("Please enter your name.");
    }else{
        return `${user}, you are loged in.`
    }
}
console.log(userLog('Animesh'))