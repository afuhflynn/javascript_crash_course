// Practicals and explanations

// HINT: Arithmetic Operators
const width = 5;
const height = 10;
console.log("Area:", width * height);
console.log("Perimeter:", 2 * (width + height));

// HINT: Assignment Operators
let counter = 0;
counter += 1;
console.log("Counter:", counter);
let score = 10;
score *= 2;
console.log("Score:", score);

// HINT: Comparison Operators
console.log(5 === "5"); // false
console.log(5 == "5"); // true

// HINT: Logical Operators
const isLoggedIn = true;
const hasPermission = false;
console.log("Access:", isLoggedIn && hasPermission);
console.log("Show login:", !isLoggedIn);

// HINT: String Operators
const firstName = "John";
const lastName = "Doe";
console.log("Concat:", firstName + " " + lastName);
console.log(`Template: ${firstName} ${lastName}`);

// HINT: Unary Operators
console.log(typeof 42);
console.log(+"123"); // converts string to number
console.log(-"5"); // -5

// HINT: Ternary Operator
const age = 17;
const status = age >= 18 ? "adult" : "minor";
console.log("Status:", status);

// HINT: Operator Precedence
console.log("Precedence:", 2 + 3 * 4); // 14
console.log("Grouped:", (2 + 3) * 4); // 20

// HINT: Type Coercion
console.log("5" - 2); // 3
console.log("5" + 2); // "52"
