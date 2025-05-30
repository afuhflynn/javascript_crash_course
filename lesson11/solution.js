// Solutions

// Exercises in NOTES.md
// 1.
const numbers = [15, 42, -7, 0, 23];
console.log("Highest:", Math.max(...numbers));
console.log("Lowest:", Math.min(...numbers));

// 2.
function randInt(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}
console.log("Random integer between 5 and 15:", randInt(5, 15));

// 3.
const floatArray = [3.14, 2.71, 1.41];
const integerArray = floatArray.map((num) => Math.round(num));
console.log("Rounded integers:", integerArray);

// 4.
for (let i = 0; i < 10; i++) {
  console.log("Die roll:", randInt(1, 6));
}

// 5.
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log("Circle area for radius 5:", calculateCircleArea(5));

// Exercises in Exercises.txt
// 1.
const arr = [10, -5, 20, 0];
console.log("Max:", Math.max(...arr));
console.log("Min:", Math.min(...arr));

// 2.
function randInt(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}
for (let i = 0; i < 5; i++) {
  console.log("Roll:", randInt(1, 20));
}

// 3.
const floats = [1.2, 2.5, 3.7];
const ints = floats.map((f) => Math.round(f));
console.log(ints);

// 4.
for (let i = 0; i < 3; i++) {
  console.log("Die roll:", randInt(1, 6));
}

// 5.
function circleArea(r) {
  return Math.PI * Math.pow(r, 2);
}
console.log("Area for r=3:", circleArea(3));
