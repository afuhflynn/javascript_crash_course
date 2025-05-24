// Solution to Exercises

// 1
const RADIUS = 7; // constant naming convention
let counter = 0;
var legacy = "old";

// 2
console.log(`Circle with radius ${RADIUS} has area ${Math.PI * RADIUS ** 2}`);

// 3
console.log("Implicit:", "5" - 2, "Explicit:", Number("5") - 2);

// 4
// Use const unless variable reassigned; let for loops and counters; avoid var

// 5
const uniqueId = Symbol("id");
console.log(uniqueId.description); // 'id'
