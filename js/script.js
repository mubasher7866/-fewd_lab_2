 //Write a function called myAlphabetLength which console.logs the length of the
//array.
var myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];

var  myAlphabetLength =  ['A', 'B', 'C', 'D','E','F', 'G'];
console.log(myAlphabet.length);

 //Declare and initialize an array called 'Planets' with 5 string values.
 var Planets = ["Earth", "Mars","Jupiter", "Mercury", "Venus"];

 //Console.log each item using index in the array of Planets.
Planets.forEach(element => console.log(0));
Planets.forEach(element => console.log(1));
Planets.forEach(element => console.log(2));
Planets.forEach(element => console.log(3));
Planets.forEach(element => console.log(4));

//Declare and initialize an array called wowDatatypes which has 3 different data
//types (NOT OBJECTS) and console.log the values.

var wowDatatypes = ["120", "false", "Hi"];

wowDatatypes = 120; // wowDatatypesr is a number
console.log(typeof(counter)); // "number"

wowDatatypes = false;   // wowDatatypes is now a boolean
console.log(typeof(counter)); // "boolean"

wowDatatypes = "Hi";   // wowDatatypes is now a string
console.log(typeof(wowDatatypes)); // "string"

// 11. Declare a variable hello. Assign a function to it returning 'Hello world!'?

var Hello = function(){
    return 'Hello World';
};
var result= Hello();

//12. Console.log the hello function.

console.log(Hello);
