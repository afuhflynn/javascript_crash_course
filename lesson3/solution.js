// Solutions

// Exercises in NOTE.md
// 1
const radius = 3.5;
const pi = Math.PI;
const area = pi * radius ** 2;
const circumference = 2 * pi * radius;
console.log(area, circumference);

// 2
const randNumber = Math.random(100);
console.log(randNumber.toFixed(0));

// 3
const fConst = 5 / 9; // fahrenheit constant
const cTemp = 37.8; // celsius temperature
// Follow this steps to solve
// if 1C = 5/9F
// => 37.8C = xF => x = 37.8 * 5/9
const fTemp = cTemp * fConst;
console.log(fTemp); // 21

// 4
// HINT: Remember `interest = P * (1 + r) ** n`
const price = 30_000_000;
const iRate = 10; // interest rate (r)
const period = 20; // period (n)
// Hence
const interest = price * (1 + iRate) ** period;
console.log(interest);

// Exercises in Exercise.txt
// 1
// Solution not available try it out your self.
