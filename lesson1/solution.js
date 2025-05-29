// Solution to Exercises

// Exercises in NOTES.md
// 1
const RADIUS = 7; // constant naming convention
let counter = 0;
var legacy = "old";

// 2
let area = Math.PI * RADIUS ** 2; // OR: Math.PI * RADIUS * RADIUS;
console.log(`Circle with radius ${RADIUS} has area ${area}`); // NOTE: To read more about template literal. Go to lesson 2: Strings

// 3
const str = "100";
const result = str + 50;
console.log(result); // 50 -> "50" + "100"

// 4
// i. NULL means explicitly or intentionally assigning a variable to null
const age = null;

// ii. UNDEFINED means declaring a variable but not assigning it a value
let number; // undefined
// const number; // ❌ const' declarations must be initialized. (This does not work with `const` variables)

// Exercises in Exercise.txt
// 1
const COUNT = 30;
let countryName = "Cameroon";

// 2
console.log("Implicit: " + "5" + 6, "Explicit: " + Number("5") + 6);

// 3
// When to use const vs let vs var

// 4
const DOB = Symbol("User's date of birth");
console.log(DOB.description);

// 5
const myName = "Afuh Flynn";
const date = new Date(); // To learn more about the date object `Check out lesson 9`
console.log("My name is: " + myName + " The current date is: " + date);
