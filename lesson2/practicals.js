// 1. Favorite quote
const quote = `
  "The only limit to our realization of tomorrow
   is our doubts of today." - Franklin D. Roosevelt
`;
console.log(quote);

// 2. Trim & lowercase
const raw = "   HELLO Gen Z!   ";
const clean = raw.trim().toLowerCase();
console.log(clean); // "hello gen z!"

// 3. includes()
console.log(clean.includes("gen z")); // true

// 4. split list
const list = "apple,banana,cherry";
const fruits = list.split(",");
console.log(fruits); // ["apple","banana","cherry"]

// 5. substring
const text = "JavaScript ES6+ features";
console.log(text.slice(0, 10)); // "JavaScript"
