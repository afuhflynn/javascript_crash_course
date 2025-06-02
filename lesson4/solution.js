// Solutions

// NOTE: In this lesson just follow along. In lesson5 you will learn more about the if statement

// Exercises in NOTES.md
// 1
// HINT: The values are 0, false, null, "", undefined and NaN
if (0) console.log("won't run");
if (null) console.log("it is null falsy");
if ("") console.log("it is empty and falsy");
if (undefined) console.log("it is undefined and falsy");
if (NaN) console.log("it is NaN and falsy");
const values = false;
if (!values) console.log("It is false and falsy");

// 2
// NOTE: Just follow along with the solution in lesson9 you will learn more about functions

// A JavaScript Function
// min < x < max
function isBetween(x, min, max) {
  // A JavaScript if-else statement
  if (min < x < max) {
    return true;
  } else {
    return false;
  }
}

// JavaScript function call and accumulation of returned value or data
const result = isBetween(10, 3, 20);
console.log(result); // true

// 3
// NOTE: Just follow along with the solution in lesson7 you will learn more about objects in JS

const config = undefined || { theme: "dark", region: "Africa" };
console.log({ configData: config }); // { configData: {theme: "dark", region: "Africa"}}

// 4
const darkMode = true;
let dark = darkMode;
if (dark) {
  console.log("It is dark mode");
}
dark = !dark;
if (!dark) {
  console.log("It is light mode");
}

// 5
// HINT: Short-Circuit in JavaScript refers to the Coupling of two or more logical operators or expressions to help perform secure executions in JavaScript and prevent or reduce runtime errors.
/**
 * HINT: Difference between && and
 * > && results to true if every value in it's expression is truthy
 * > || results to true if at least one of the values in it's expression is truthy.
 */

// Exercises in Exercise.txt
// Solution not available you can try them out your self. It's very important you do them on your own.
