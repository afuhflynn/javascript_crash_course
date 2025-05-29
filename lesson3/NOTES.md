# Lesson 3: Numbers & Math

## Table of Contents

* [Number Types](#number-types)
* [Numeric Literals & Underscores](#numeric-literals--underscores)
* [Basic Arithmetic](#basic-arithmetic)
* [Math Object](#math-object)
* [Order of Operations](#order-of-operations)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Number Types

JavaScript has a single `Number` type for integers and floats, plus `BigInt` for very large integers.

```js
let integer = 42;
let floatVal = 3.14;
let bigNum = 123456789012345678901234567890n; // BigInt literal with `n`
```

---

## Numeric Literals & Underscores

Use underscores to improve readability in large numbers.

```js
let million = 1_000_000;
let hex = 0xFF;        // 255
let binary = 0b1010;    // 10
let octal = 0o755;      // 493
```

---

## Basic Arithmetic

Operators: `+ - * / % **` (exponentiation)

```js
let a = 5, b = 2;
console.log(a + b);  // 7
console.log(a - b);  // 3
console.log(a * b);  // 10
console.log(a / b);  // 2.5
console.log(a % b);  // 1 (remainder)
console.log(a ** b); // 25 (5²)
```

---

## Math Object

Built-in `Math` for advanced operations:

```js
console.log(Math.PI);           // 3.14159...
console.log(Math.abs(-7));      // 7
console.log(Math.ceil(2.3));    // 3
```

`To learn more about the Math Object, go to lesson 11`

---

## Order of Operations

JavaScript follows standard `PEMDAS` and `BODMAS`:

```js
// Parentheses, Exponents, *, /, %, +, -
console.log(2 + 3 * 4);         // 14
console.log((2 + 3) * 4);       // 20
console.log(3 + 4 ** 2 / 2);    // 11
```

---

## Real-World Use Cases

* Financial calculations (cart totals, interest rates)
* Animations (time-based interpolation)
* Data visualization (scaling values)

---

## Exercises

1. Calculate area and circumference for a circle given `radius`.
2. Generate a random integer between 1 and 100.
3. Convert Celsius to Fahrenheit and vice versa.
4. Use exponentiation to compute compound interest: `P * (1 + r) ** n`.

---
