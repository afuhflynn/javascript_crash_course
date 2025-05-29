// Practicals and explanations

// Creating a string in js
let single = "Hello";
let double = "World";
let backtick = `!`;
console.log(single + " " + double + backtick); // "Hello World!"

// HINT: Escape sequence
console.log("Line1\nLine2"); // Line1
// Line 2
console.log("Line1\tLine2"); // Line1    Line2
console.log("C:\\Desktop\\js_course\\main.js"); // C:\Desktop\js_course\main.js
console.log("I'm called JohnDoe"); // I'm called JohnDoe

// HINT: Template literal or string
const userName = "Afuh";
const score = 95;
const msg = `Student ${userName} scored
${score}% on the test.`; // Multi-line string
console.log(msg);

// HINT: String Methods
let phrase = "  JavaScript Rocks!  ";
console.log(phrase.trim()); //JavaScript Rocks! (with no whitespace)
console.log(phrase.toUpperCase()); // JAVASCRIPT ROCKS! (with whitespaces)
console.log(phrase.split(" ")); // [ '', '', 'JavaScript', 'Rocks!', '', '' ] (splits the string at every white space found)
console.log(phrase.slice(2, 12)); // JavaScript

// HINT: String Concatenation
let phrase2 = "  JavaScript Rocks!  ";
console.log(phrase2.trim()); //JavaScript Rocks! (with no whitespace)
console.log(phrase2.toUpperCase()); // JAVASCRIPT ROCKS! (with whitespaces)
console.log(phrase2.split(" ")); // [ '', '', 'JavaScript', 'Rocks!', '', '' ] (splits the string at every white space found)
console.log(phrase2.slice(2, 12)); // JavaScript

// HINT: Accessing individual elements in a string
const user = "Flynn";
// NOTE: Using the `.charAt` method
console.log(user.charAt(3)); // n (Returns the element at index 3)
