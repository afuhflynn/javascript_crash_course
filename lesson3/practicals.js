// Practicals and explanations

// HINT: Number types
let integer = 42;
let floatVal = 3.14;
let bigNum = 123456789012345678901234567890n; // BigInt literal with `n`

// HINT: Numeric literals and underscores
let million = 1_000_000; // 1000000
let hex = 0xff; // 255 in decimal
let binary = 0b1010; // 10 in decimal

// HINT: Basic Arithmetic operations
let a = 5,
  b = 2;
console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10

// HINT: The Math Object
console.log(Math.PI); // 3.14159...
console.log(Math.abs(-7)); // 7 (.abs(value)-> returns the absolute value of -7 resulting to 7)

// HINT: Order of operations
// Parentheses, Exponents, *, /, %, +, -
console.log(2 + 3 * 4); // 14
console.log((2 + 3) * 4); // 20

// HINT: Examples
// Circle metrics
const radius = 3.5;
const pi = Math.PI;
const area = pi * radius ** 2;
const circumference = 2 * pi * radius;

console.log(area, circumference);
