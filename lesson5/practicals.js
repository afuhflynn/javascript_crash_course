// Practicals and explanations

// HINT: if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// HINT: if-else statement
let score = 75;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// HINT: else-if ladder
let temperature = 30;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature >= 20) {
  console.log("It's warm.");
} else {
  console.log("It's cold.");
}

// HINT: switch statement
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana is yellow.");
    break;
  case "apple":
    console.log("Apple is red or green.");
    break;
  default:
    console.log("Unknown fruit");
}

// HINT: for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// HINT: while loop
let count = 1;
while (count <= 5) {
  console.log("While count: " + count);
  count++;
}

// HINT: do-while loop
let n = 1;
do {
  console.log("Do-while count: " + n);
  n++;
} while (n <= 5);
