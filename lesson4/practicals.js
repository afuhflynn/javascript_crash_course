// Practicals and explanations

// HINT: Boolean values
let isValid = true;
let isDone = false;

// HINT: Truthy and Falsy (Coerced values in expressions and operations in JavaScript)

// NOTE: In this topic just follow along. In lesson5 you will learn more about the if statement

// A JavaScript conditional if statement
if ("hello") console.log("truthy");
if (0) console.log("won't run");
if (null) console.log("it is null falsy");
if ("") console.log("it is empty and falsy");
if (undefined) console.log("it is undefined and falsy");
if (NaN) console.log("it is NaN and falsy");
const values = false;
if (!values) console.log("It is false and falsy");

// HINT: Logical Operators
// NOTE: AND &&
// Resolves to true if all arguments are truthy
const username = "Alice";
if (true && username) {
  console.log("Alice"); // 'Alice'
} else {
  console.log("It is not Alice"); // It is not Alice
}

// NOTE: ||
// Resolves to true if at least one of it's arguments are truthy
let Bob = undefined;
let isBob = true;
if (Bob || isBob) {
  console.log("Bob"); // 'Bob'
} else {
  console.log("Bob is undefined"); // Bob is undefined
}

// NOTE: NOT !
// Converts every value it is given into The Opposite of that value (Inverts the value)
console.log(!true); // false
console.log(!0); // true  (0 is falsy)

// HINT: Short-Circuit Evaluation & Real world implementation
const user = null;
const userName = user && user.name; // null, no error
console.log(userName); // null

const input = "";
const value = input || "default"; // 'default'
console.log(value); // default
