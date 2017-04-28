console.log("Hello World!")

//functions are first class
function greet() {
    console.log("Moro!");
}
greet();

logGreeting(function() {
    console.log("Moro Miikka");
});

function logGreeting(fn) {
    fn();
}
logGreeting(greet);

var greetMe = function() {
    console.log("Moikka Miikka!");
}
greetMe();

require('./greet.js');