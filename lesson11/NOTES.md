# Lesson 11: The Math Module

## Table of Contents

* [Overview](#overview)
* [Common Math Methods](#common-math-methods)

  * [Math.abs()](#mathabs)
  * [Math.ceil(), Math.floor(), Math.round()](#mathceil-mathfloor-mathround)
  * [Math.max(), Math.min()](#mathmax-mathmin)
  * [Math.pow(), \*\* operator](#mathpow--operator)
  * [Math.sqrt()](#mathsqrt)
  * [Math.random()](#mathrandom)
* [Additional Methods](#additional-methods)

  * [Math.trunc()](#mathtrunc)
  * [Math.sign()](#mathsign)
  * [Math.log(), Math.exp()](#mathlog-mathexp)
* [Combining with Other Code](#combining-with-other-code)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Overview

The `Math` object provides properties and methods for mathematical constants and functions. It's not a constructor. All methods are static.

---

## Common Math Methods

### Math.abs()

Returns absolute value.

```js
Math.abs(-5); // 5
```

### Math.ceil(), Math.floor(), Math.round()

Ceiling, floor, and nearest integer.

```js
Math.ceil(4.2);  // 5
Math.floor(4.8); // 4
Math.round(4.5); // 5
```

### Math.max(), Math.min()

Get maximum or minimum.

```js
Math.max(1, 5, 3); // 5
Math.min(1, 5, 3); // 1
```

### Math.pow(), \*\* operator

Exponentiation.

```js
Math.pow(2, 3); // 8
2 ** 3;         // 8
```

### Math.sqrt()

Square root.

```js
Math.sqrt(16); // 4
```

### Math.random()

Random number in \[0,1).

```js
Math.random();
```

---

## Additional Methods

### Math.trunc()

Truncates decimal part.

```js
Math.trunc(4.9); // 4
```

### Math.sign()

Returns sign of number.

```js
Math.sign(-10); // -1
```

### Math.log(), Math.exp()

Natural logarithm and exponent.

```js
Math.log(Math.E); // 1
Math.exp(1);      // 2.718...
```

---

## Combining with Other Code

Generate random integer between m and n:

```js
function randInt(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}
```

---

## Real-World Use Cases

* Random ID generation or sampling
* Rounding currency values
* Calculating statistics (min, max, abs, sqrt)
* Exponential growth/decay models

---

## Exercises

1. Use `Math.max()` and `Math.min()` to find the highest and lowest in an array of numbers.
2. Write a `randInt(m, n)` function to return an integer between m and n inclusive.
3. Given an array of floats, use `map()` with `Math.round()` to create an array of integers.
4. Use `Math.random()` to simulate rolling a six-sided die 10 times and log results.
5. Calculate the area of a circle given radius `r` using `Math.PI` and `Math.pow()`.

---

For more exercises checkout: [Exercises](./Exercise.txt) and for solution to the exercises checkout: [Solution](./solution.js)
