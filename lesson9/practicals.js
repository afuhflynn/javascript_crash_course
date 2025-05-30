// Practicals and explanations

// Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Alice");

// Function Expression
const sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 3));

// Arrow Function
const square = (n) => n * n;
console.log(square(4));

// Default Parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));

// Scope Examples
const count = 0; // global
function scopeTest() {
  let count = 10; // local
  console.log("inside:", count);
}
scopeTest();
console.log("outside:", count);

// Closure Example
function makeCounter() {
  let c = 0;
  return function () {
    c++;
    return c;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());

// Hoisting Example
hoisted();
function hoisted() {
  console.log("This function was hoisted!");
}
