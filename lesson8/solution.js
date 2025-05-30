// Solutions

// Exercises in NOTES.md
// 1. Area and Perimeter
const w = 10; // width
const h = 5; // height
console.log("Area:", w * h); // 50
console.log("Perimeter:", 2 * (w + h)); // 30

// 2. Difference between == and ===
console.log(1 == "1"); // true (type coercion)
console.log(1 === "1"); // false (strict equality)

// 3. Using += and *=
let counter = 0;
counter += 5; // 5
counter *= 2; // 10
console.log("Counter:", counter);

let score = 10;
score += 20; // 30
score *= 3; // 90
console.log("Score:", score);

// 4. String concatenation and template literals
const greeting = "Hi";
const name = "Alice";
console.log(greeting + ", " + name + "!"); // "Hi, Alice!"
console.log(`${greeting}, ${name}!`); // "Hi, Alice!"

// 5. String to number conversion
const strNum = "123";
const converted1 = +strNum;
const converted2 = Number(strNum);
console.log(converted1, typeof converted1); // 123 'number'
console.log(converted2, typeof converted2); // 123 'number'

// Exercises in Exercises.txt
// 1.
const width = 8;
const height = 12;
console.log("Area:", width * height);
console.log("Perimeter:", 2 * (width + height));

// 2.
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false

// 3.
let points = 5;
points += 10; // 15
points *= 2; // 30
console.log("Points:", points);

// 4.
const first = "Hello";
const second = "World";
console.log(first + " " + second); // "Hello World"
console.log(`${first} ${second}`); // "Hello World"

// 5.
const str = "42";
const num1 = +str;
const num2 = Number(str);
console.log(num1, typeof num1); // 42 'number'
console.log(num2, typeof num2); // 42 'number'
