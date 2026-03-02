// Anonymous functiom in JavaScript
// These are functions that exists without a name.

// Below is an example of such funcion
// The beow function shall take the name of the variable they are contained in.

const greet = function(){
    console.log("Hello there, hope your Monday is fine...")
}
greet();
console.log(typeof(greet));

// Below is anothe anonymous function
(function(){
    console.log("Welcome to the world of programming...")
})(); // self executing functions nomaly has no names. The first parenthesis is used to enclose the function and the second parenthesis is used to invoke the function immediately.

// used as a callback
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);