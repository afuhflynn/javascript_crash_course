// Practicals and explanations

// HINT: Variables
// Variable declaration:
// var userName;
// let height;
// const count;

// Variable definition:
var userName = "John";
let height = 30;
const count = 40;

// The var keyword:
var age = 1;
var age = 2; // okay

// The let keyword:
let user1 = "Alice";
// let user1 = 'Bob'; // ❌ Error: Identifier 'user1' has already been declared

// The const keyword:
let user2 = "Alice";
// let user2 = 'Bob'; // ❌ Error: Identifier 'user2' has already been declared

// HINT: Data Types
// NOTE: Primitive data types
// String
let name = "Afuh";

// Number
let age = 21;
let gpa = 3.75;

// Boolean (true or false) -> (1 or 0)
let isStudent = true;
let isOpen = false;

// Undefined
let userName; // undefined
let age;

// Null
let username = null; // null
let value = null;

// Symbol
let userDescription = Symbol(
  "User object with properties such as: name, username, age, id, etc."
);
console.log(userDescription.description);

// NOTE: Non-primitive data types
// Array
let names = ["John", "Lawrence", "Flynn"]; // Array of strings
let nums = [1, 4, 8, 0]; // Array of numbers

let items = [
  "John",
  "Rice",
  98,
  30,
  "Ruth",
  false,
  true,
  0,
  { name: "Cameroon", capital: "Yaounde" },
]; // Array of strings, numbers and boolean: Not too reasonable or usable.

// Object
let user = {
  name: "Flynn",
  age: 30,
  prefersTheme: "dark",
};

// HINT: Type Constructors
// String Constructor
let currentYear = 2025;
currentYear = String(currentYear);
console.log(typeof currentYear); // string

// Number Constructor
let year = "2025";
year = Number(year);
console.log(typeof year); // number

// Boolean Constructor
let x = "true";
x = Boolean(x);
console.log(isTrue); // true
console.log(typeof x); // boolean

// HINT: Variable naming conventions
// Camel Casing:
const studentName = "JohnDoe";
const numberOfChildren = 20;

// Pascal Casing:
const StudentName = "JohnDoe";
const NumberOfChildren = 20;

// Snake Casing:
const student_name = "JohnDoe";
const number_of_children = 20;

// NOTE: Avoid:
// const numberofchildren = 20; // Not readable enough
// studentname = "John"; // Not readable enough

// HINT: Type Coercion and conversion
// Coercion (Implicit):
console.log("5" - 2); // 3 (string -> number)
console.log("5" + 2); // "52" (number -> string concatenation)

// Conversion (Explicit):
console.log(Number("123")); // 123
console.log(String(456)); // "456"
console.log(Boolean(0)); // false

// HINT: Best Practices
const num = 30;
console.log(num == "30"); // true ("30" -> 30 and then (num == 30) results to true);
console.log(num === "30"); // false (no type coercion)

console.log(num != "30"); // false ("30" -> 30 and then (num != 30) results to false);
console.log(num !== "30"); // true (no type coercion)
