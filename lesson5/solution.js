// Solutions

// Exercises in NOTES.md
// 1.
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// 2.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3.
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// 4.
function dayType(day) {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      console.log("weekend");
      break;
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      console.log("weekday");
      break;
    default:
      console.log("Invalid day");
  }
}

// 5.
function printNotEqualItems(array, itemToExclude) {
  for (let item of array) {
    if (item !== itemToExclude) {
      console.log(item);
    }
  }
}

// Exercises in Exercises.txt
// 1.
let num = 0;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2.
let color = "red";
switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  case "blue":
    console.log("Calm and cool.");
    break;
  default:
    console.log("Unknown color");
}

// 3.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 4.
let a = 0,
  b = 1,
  fibCount = 10;
let i = 1;
while (i <= fibCount) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
  i++;
}

// 5.
// Simulating user input with variable
let password = "wrong";
let correctPassword = "secret";
do {
  console.log("Enter password");
  // Simulate user re-trying (in real scenario, prompt input)
  password = "secret"; // simulate user finally entering correct password
} while (password !== correctPassword);
console.log("Access granted");
