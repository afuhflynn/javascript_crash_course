
# Lesson 9: Functions & Scope

## Table of Contents

* [Function Basics](#function-basics)
* [Parameters & Arguments](#parameters--arguments)
* [Return Statement](#return-statement)
* [Scope](#scope)
* [Hoisting](#hoisting)
* [Closures](#closures)
* [Exercises](#exercises)

---

## Function Basics

### Function Declaration

```js
function greet(name) {
  return `Hello, ${name}!`;
}
````

### Function Expression

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### Arrow Function

```js
const greet = (name) => `Hello, ${name}!`;
```

---

## Parameters & Arguments

* **Parameters** are named in definition: `(a, b)`
* **Arguments** are passed values: `greet('Alice')`

---

## Return Statement

Functions return `undefined` if no `return`:

```js
function add(a, b) {
  return a + b;
}
```

---

## Scope

### Global Scope

Variables declared outside functions.

### Local/Function Scope

Variables inside a function only exist there.

### Block Scope (let/const)

`let` and `const` respect `{}` blocks.

---

## Hoisting

Function declarations and `var` are hoisted.

---

## Closures

Inner functions retain access to outer scope:

```js
function outer(x) {
  return function inner(y) {
    return x + y;
  };
}
const addFive = outer(5);
addFive(3); // 8
```

---

## Exercises

1. Write three versions of a `square(n)` function: declaration, expression, arrow.
2. Create a function `multiply(a, b=1)` with default parameter.
3. Demonstrate global vs local scope with a variable named `count`.
4. Use a closure to implement `makeCounter()` that returns a function incrementing an internal count.
5. Explain hoisting by calling a function before its declaration.

---

For more exercises checkout: [Exercises](./Exercise.txt) and for solution to the exercises checkout: [Solution](./solution.js)
