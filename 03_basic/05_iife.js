//!  immediate invoked Function Expression - iife

function chai(){
    console.log("Run immediate.");
}
chai();


(function chai(){                   // NAME IIFE
    console.log("Run immediate.");
}) ();                    //* this is called IIFE 


( () => {                         // simple IIFE
    console.log("Run immediately 2");
}) ()


const vari= ()=> {
    console.log("what is your name?");
}
console.log(vari);
