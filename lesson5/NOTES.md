# Lesson 5: Control Flow & Loops

## Table of Contents

* [Control Flow Overview](#control-flow-overview)
* [Conditional Statements](#conditional-statements)

  * [if Statement](#if-statement)
  * [else if and else](#else-if-and-else)
  * [Ternary Operator](#ternary-operator)
  * [Switch Statement](#switch-statement)
* [Loops](#loops)

  * [for Loop](#for-loop)
  * [while Loop](#while-loop)
  * [do...while Loop](#dowhile-loop)
* [Breaking and Continuing](#breaking-and-continuing)
* [Looping Over Arrays](#looping-over-arrays)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Control Flow Overview

Control flow allows you to dictate how your program executes from top to bottom—deciding which blocks of code run under which conditions.

---

## Conditional Statements

### if Statement

```js
let age = 18;
if (age >= 18) {
  console.log('You can vote.');
}
```

### else if and else

```js
if (age > 18) {
  console.log('Adult');
} else if (age === 18) {
  console.log('Just became an adult');
} else {
  console.log('Minor');
}
```

### Ternary Operator

```js
let score = 90;
let grade = score > 80 ? 'A' : 'B';
console.log(grade);
```

### Switch Statement

```js
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('Weekend loading');
    break;
  default:
    console.log('Midweek vibes');
}
```

---

## Loops

### for Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### while Loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### do...while Loop

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

## Breaking and Continuing

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;  // exits loop
  if (i === 1) continue;  // skips iteration
  console.log(i);
}
```

---

## Looping Over Arrays

```js
const fruits = ['apple', 'banana', 'mango'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// OR use for...of
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## Real-World Use Cases

* Validating form fields with conditionals
* Looping through data arrays for rendering UI
* Conditionally rendering components in frameworks like React
* Processing API responses and branching logic
* Scheduling logic based on current day/time

---

## Exercises

1. Write a function that returns "even" or "odd" based on a number using an `if...else`.
2. Use a `for` loop to print numbers from 1 to 10.
3. Rewrite the same using a `while` loop.
4. Use a `switch` statement to print the type of day ("weekend" or "weekday") for a given day string.
5. Write a function that loops through an array and prints items that are NOT equal to a specified item.

---

For more exercises checkout: [Exercises](./Exercises.txt) and for solution to the exercises checkout: [Solution](./solution.js)
