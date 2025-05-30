// Practicals and explanations

// HINT: Math.abs()
console.log(Math.abs(-7)); // 7

// HINT: ceil, floor, round
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.round(4.5)); // 5

// HINT: max and min
console.log(Math.max(3, 9, -2)); // 9
console.log(Math.min(3, 9, -2)); // -2

// HINT: pow and exponent operator
console.log(Math.pow(2, 4)); // 16
console.log(2 ** 4); // 16

// HINT: sqrt
console.log(Math.sqrt(25)); // 5

// HINT: random
console.log(Math.random()); // between 0 and 1

// HINT: trunc and sign
console.log(Math.trunc(3.9)); // 3
console.log(Math.sign(-5)); // -1

// HINT: log and exp
console.log(Math.log(Math.E)); // 1
console.log(Math.exp(1)); // ~2.718

// HINT: Random integer helper
function randInt(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}
console.log(randInt(1, 6)); // dice roll
