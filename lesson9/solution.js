// Solutions

// Exercises in NOTES.md
// 1.
// Function Declaration
function squareDecl(n) {
  // This is a named function that calculates the square of a number
  return n * n;
}

// Function Expression
// const squareExpr = function (n) {
//     // This is an anonymous function assigned to a variable
//     return n * n;
// };

// // Arrow Function
// const squareArrow = (n) => {
//     // This is a concise arrow function
//     return n * n;
// };

// Arrow function can also be written in a single line if it has a single return statement
// const squareArrow = (n) => n * n;

console.log(squareDecl(5), squareExpr(5), squareArrow(5)); // Outputs: 25 25 25

// 2.
function multiply(a, b = 1) {
  // If the second parameter is not provided, it defaults to 1
  return a * b;
}

console.log(multiply(10)); // Outputs: 10 (10 * 1)
console.log(multiply(10, 2)); // Outputs: 20 (10 * 2)

// 3. Demonstrate global vs local scope with a variable named `count`.
var count = 10; // Global variable
function demonstrateScope() {
  var count = 5; // Local variable (shadows the global variable)
  console.log("Inside function, count:", count); // Outputs: 5
}
console.log("Global count before function call:", count); // Outputs: 10
demonstrateScope();
console.log("Global count after function call:", count); // Outputs: 10

// 4. Use a closure to implement `makeCounter()` that returns a function incrementing an internal count.
function makeCounter() {
  let count = 0; // This variable is private to the closure
  return function () {
    count++; // Increment the private variable
    return count; // Return the updated count
  };
}

const counter = makeCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

// 5. Explain hoisting by calling a function before its declaration.
hoistExample(); // This works because function declarations are hoisted

function hoistExample() {
  console.log("This function is hoisted!");
}

// Note: Function declarations are hoisted to the top of their scope, so you can call them before they are defined in the code.
// However, function expressions and arrow functions are not hoisted in the same way.

// Exercises in Exercises.txt
// 1.
function squareDecl(n) {
  return n * n;
}
const squareExpr = function (n) {
  return n * n;
};
const squareArrow = (n) => n * n;
console.log(squareDecl(5), squareExpr(5), squareArrow(5));

// 2.
function divide(a, b = 1) {
  return a / b;
}
console.log(divide(10), divide(10, 2));

// 3.
var x = 1;
function testScope() {
  var x = 5;
  console.log("inside x:", x);
}
console.log("before:", x);
testScope();
console.log("after:", x);

// 4.
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const cnt = makeCounter();
console.log(cnt());
console.log(cnt());

// 5.
hoistDemo();
function hoistDemo() {
  console.log("Hoisted successfully!");
}
