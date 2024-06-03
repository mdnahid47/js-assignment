// 1.Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.


function celsiusToFahrenheit(celsius) {
    // Formula to convert Celsius to Fahrenheit: (celsius * 9/5) + 32
    return (celsius * 9 / 5) + 32;
  }
  
  console.log(celsiusToFahrenheit(0)); // Output: 32
  console.log(celsiusToFahrenheit(25)); // Output: 77
  

// 2.Write a function to check if a number is even. The function should take a single argument, which is the number to check.

function isEven(num) {
    // The modulo operator (%) returns the remainder of a division
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false


//   3. Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function sum(a, b) {
    // Add the two arguments and return the result
    return a + b;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30

// 4.Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

function findSmallestNum(arr) {
    // Handle empty array case (return undefined)
    if (arr.length === 0) {
      return undefined;
    }
  
    // Initialize smallest with the first element (assuming non-empty array)
    let smallest = arr[0];
  
    // Loop through the remaining elements, starting from the second
    for (let i = 1; i < arr.length; i++) {
      // Update smallest if the current element is smaller
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
  
    // Return the smallest number
    return smallest;
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  console.log(findSmallestNum([])); // undefined (empty array case)


//   5.Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

function countVowels(str) {
    // Create a set of lowercase vowels for efficient lookups
    const vowels = new Set('aeiou');
  
    // Initialize a counter variable
    let vowelCount = 0;
  
    // Loop through each character in the string (converted to lowercase)
    for (const char of str.toLowerCase()) {
      // Check if the character is a vowel using the Set
      if (vowels.has(char)) {
        vowelCount++;
      }
    }
  
    // Return the total number of vowels
    return vowelCount;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3

// 6.Write a function to get the first element of an array. The function should take a single argument, which is the array.


  function getFirstElement(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return undefined; // Return undefined for empty arrays
    }
  
    // Return the first element (assuming non-empty array)
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined (empty array case)
  

//   7.Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
    // Check if the array length is zero
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false

//8.Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorialize(num) {
    // Handle negative and non-numeric input (return undefined)
    if (typeof num !== 'number' || num < 0) {
      return undefined;
    }
  
    // Base cases: 0! = 1 and 1! = 1
    if (num === 0 || num === 1) {
      return 1;
    }
  
    // Recursive case: factorial(n) = n * factorial(n-1)
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

// 9.Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {
    // Split the string into an array of characters
    const characters = str.split('');
  
    // Reverse the array of characters
    characters.reverse();
  
    // Join the reversed characters back into a string
    return characters.join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"

  
//10.Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

function toLowerCase(str) {
    // Use the built-in toLowerCase() method
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"

  


// 11.Write a function to find the length of a string. The function should take a single argument, which is the string.
function stringLength(str) {
    // Use the built-in length property
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5

// 12.Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

function mergeArrays(arr1, arr2) {
    // Use the concat() method to create a new array with elements from both arrays
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

  
// 13.Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
    // Check for empty array and return undefined
    if (arr.length === 0) {
      return undefined;
    }
  
    // Access the last element using array indexing (length - 1)
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
 

// 14. Write a function to get the first character of a string. The function should take a single argument, which is the string.
function getFirstCharacter(str) {
    // Check if the string is empty
    if (str.length === 0) {
      return undefined; // Return undefined for empty strings
    }
  
    // Access the first character using bracket notation or charAt()
    return str[0]; // Using bracket notation
    // return str.charAt(0); // Using charAt() (alternative)
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"


// 15.Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.


function sumArray(arr) {
    // Initialize a variable to store the sum (starts at 0)
    let sum = 0;
  
    // Iterate through the array and add each element to the sum
    for (let num of arr) {
      sum += num;
    }
  
    // Return the total sum
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  
  
  

  
  
  
  