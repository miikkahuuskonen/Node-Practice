// näkyvyys eli scope-alueiden testi ja IIFE

var firstName = "Jane";

// IIFE
(function(lastName) {
    var firstName = "John";
    console.log(firstName, lastName);
    console.log(lastName, firstName);
}("Doe"));




console.log(firstName);
