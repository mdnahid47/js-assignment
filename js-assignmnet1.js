                                    // JavaScript Basic Problem Solving 


// 1 . Create a variable called carName, assign the value Volvo to it.
var carName = "Volvo";

// 2 .On one single line, declare three variables with the following names and values:

// firstName = "John"
// lastName = "Doe"
// age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

// let ... = "John";  // write variable name
// let lastName = "..." //write variable values 
// let ... = ... ; // write variable name and values both 

let firstName = "John";  // First variable name
let lastName = "Doe";    // Second variable value
let age = 35;            // Third variable name and value

// 3 . Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

// x = 10;
// y = 5;
// x = ... // what will be the value of x ? 


x = 10;
y = 5;
x *= y; // x is now 50


// // 4. Use comments to describe the correct data type of the following variables:

// let length = 16; // data type ? 
// let lastName = "Johnson"; // data type ? 

// const x = {
//   firstName: "John",  
//   lastNames: "Doe"
// };    // data type ?





let length = 16; // data type: number

let lastNames = "Johnson"; // data type: string

const x = { firstName: "John", lastName: "Doe" }; // data type: object


 // 5.Execute the function named myFunction.
// Execute the function named myFunction.
 
//  function myFunction() {
//   alert("Hello World!");
// }

// // call the function and see the output 

function myFunction() {
    alert("Hello World!");
  }
  
  // Call the function to display the alert
  myFunction();
  
// 6. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").


let person = {  
    name: "John",
    age: 50
  };
  
  // Access object properties using key-value notation
  let message = `${person.name} is ${person.age}`;  
  alert(message);  // Display the alert message



//   7. The <button> element should do something when someone clicks on it. Try to fix it!

// <button>Click me.</button> 

<button onclick="alert('You clicked the button!')">Click me.</button>


// Array Related Question

// 1. Alert the number of items in an array, using the correct Array property: 

// const cars = ["Volvo", "Jeep", "Mercedes"];

const cars = ["Volvo", "Jeep", "Mercedes"];

alert(cars.length);  // This will alert the number 3


// 2. Change the first item of Brand to "Ford".

// 	const Brand = ["Volvo", "Jeep", "Mercedes"]; 

const Brand = ["Volvo", "Jeep", "Mercedes"];
const updatedBrand = ["Ford", ...Brand.slice(1)];  

console.log(updatedBrand);  // Output: ["Ford", "Jeep", "Mercedes"]

// 9. Math Related Problems 

// 1. Use the correct Math method to create a random number.
const randomNumber = Math.random();
console.log(randomNumber);  // This will display a random number between 0 (inclusive) and 1 (exclusive)

// 2.Use the correct Math method to return the largest number of 10 and 20.

const num1 = 10;
const num2 = 20;

let largest;

if (num1 > num2) {
  largest = num1;
} else {
  largest = num2;
}

console.log(largest);  // Output: 20

// 3. Use the correct Math method to get the square root of 9.
const number = 9;
const squareRoot = Math.sqrt(number);

console.log(squareRoot);  // Output: 3


// comparison operator related problems! 

// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
// x = 10;
// y = 5;

// alert() // ? 

x = 10;
y = 5;

if (x > y) {
  alert("x is greater than y!");
}


// 2.Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let ages = 17; // Replace with your actual age

const messages = age < 18 ? "Too young" : "Old enough";
alert(messages);








  

