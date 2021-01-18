//comments with slashes
console.log('Hello World'); //print to console. f12 for browser console


//variables
let x = 10; // number literal

let name;

console.log(name);

name = 'Brett'; // String literal

console.log(name);

// variables cannot be reserved keywords (if, else, let, etc.)
// should be meaningful names should be descriptive
// cannot start with a number
// cannot contain a space or a hyphen
// use camelCase for variables
// variables are case sensitive

// declare multiple variables on same line but it's best practice to use seperate lines
let firstName = 'Brett', lastName = 'Wells';

console.log(firstName);
console.log(lastName);

//can use constants instead of variables to avoid manipulation
const interestRate = 1;
console.log(interestRate);

//primitive types
// String, Number, Boolean, undefined, null
// in ES6 there is another primitive called symbol

//dynamic typing
console.log(typeof name);
name = 1;
console.log(typeof name); //all numbers of numbers are of type 'number'

//undefine is a type and also a value

//refernce types
// Object, Array, Function

let person = {
  name: 'Brett',
  age: 27
};

person.name = 'Not Brett'; // primarily use this notation
person['name'] = 'Brett';

let selection = 'name';
person[selection] = 'Hello Brett'; // useful way to implement this notation

console.log(person);

// Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);

//functions
function greet() {
  console.log('Hello World')
}

greet();
