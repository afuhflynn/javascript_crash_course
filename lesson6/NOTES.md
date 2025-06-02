# Lesson 6: Arrays & Iterations

## Table of Contents

* [Array Basics](#array-basics)

  * [Declaring Arrays](#declaring-arrays)
  * [Accessing Elements](#accessing-elements)
  * [Array Properties](#array-properties)
* [Modifying Arrays](#modifying-arrays)

  * [push() & pop()](#push--pop)
  * [shift() & unshift()](#shift--unshift)
  * [splice() & slice()](#splice--slice)
* [Iteration Techniques](#iteration-techniques)

  * [for Loop](#for-loop)
  * [for...of Loop](#forof-loop)
  * [Array.prototype.forEach()](#arrayprototypeforeach)
* [Higher-Order Array Methods](#higher-order-array-methods)

  * [map()](#map)
  * [filter()](#filter)
  * [reduce()](#reduce)
* [Combining Methods](#combining-methods)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Array Basics

### Declaring Arrays

```js
const items = [];
const numbers = [1, 2, 3];
const mixed = [1, 'two', true, null];
```

### Accessing Elements

```js
console.log(numbers[0]); // 1
console.log(numbers[numbers.length - 1]); // last element
```

### Array Properties

* `length`: number of elements
* Arrays are zero-indexed

```js
console.log(numbers.length); // 3
```

---

## Modifying Arrays

### push() & pop()

* `push(value)`: add to end
* `pop()`: remove from end

```js
numbers.push(4); // [1,2,3,4]
const last = numbers.pop(); // last = 4, numbers = [1,2,3]
```

### shift() & unshift()

* `shift()`: remove from front
* `unshift(value)`: add to front

```js
numbers.unshift(0); // [0,1,2,3]
numbers.shift(); // removes 0
```

### splice() & slice()

* `splice(start, deleteCount, ...items)`: mutates array
* `slice(start, end)`: returns shallow copy

```js
numbers.splice(1,2,'a','b'); // modify in place
const sub = numbers.slice(1,3); // new array
```

---

## Iteration Techniques

### for Loop

```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### for...of Loop

```js
for (const num of numbers) {
  console.log(num);
}
```

### Array.prototype.forEach()

```js
numbers.forEach((num, idx) => {
  console.log(idx, num);
});
```

---

## Higher-Order Array Methods

### map()

Transforms each element and returns a new array.

```js
const squares = numbers.map(n => n * n);
```

### filter()

Filters elements based on a predicate.

```js
const evens = numbers.filter(n => n % 2 === 0);
```

### reduce()

Reduces array to a single value.

```js
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

---

## Combining Methods

Chain methods for concise logic.

```js
const result = numbers
  .filter(n => n > 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);
```

---

## Real-World Use Cases

* Transforming API data with `map`
* Filtering search results
* Summing totals with `reduce`
* Paginating UI items with slices

---

## Exercises

1. Declare an array of your favorite cuisines. Log the first and last items.
2. Add two new cuisines to the end, then remove one from the front.
3. Use a `for...of` loop to print all cuisines in uppercase.
4. Use `map()` to create a new array of name lengths.
5. Filter the cuisines array to include only names longer than 5 letters.
6. Compute the total number of characters across all cuisine names using `reduce()`.

---

For more exercises checkout: [Exercises](./Exercises.txt) and for solution to the exercises checkout: [Solution](./solution.js)
