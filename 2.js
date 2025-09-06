// User-defined function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Calling the function
let num1 = 10;
let num2 = 20;
let sum = addNumbers(num1, num2);

// Display result on the webpage
document.getElementById("result").innerHTML =
  "The sum of " + num1 + " and " + num2 + " is: " + sum;
