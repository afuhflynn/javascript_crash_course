# Lesson 1: Variables & Data Types

## Table of Contents

* [Introduction](#introduction)
* [var, let, const](#var)
* [Primitive Data Types](#primitive-data-types)
* [Type Coercion & Conversion](#type-coercion--conversion)
* [Best Practices](#best-practices)
* [Exercises](#exercises)

---

## Introduction

Variables are containers for storing data values. In JavaScript, you declare variables with `var`, `let`, or `const`.

### `var`

* Function-scoped
* Can be redeclared

```js
var count = 1;
var count = 2; // okay
```

### `let`

* Block-scoped
* Cannot be redeclared in same scope

```js
let user = 'Alice';
// let user = 'Bob'; // ❌ Error: Identifier 'user' has already been declared
```

### `const`

* Block-scoped
* Read-only binding (value can be an object whose properties mutate)

```js
const PI = 3.1415;
// PI = 3.14; // ❌ TypeError: Assignment to constant variable.
```

---

## Primitive Data Types

1. **String**: sequence of characters

   ```js
   let name = "Afuh";
   ```

2. **Number**: integers and floats

   ```js
   let age = 21;
   let gpa = 3.75;
   ```

3. **Boolean**: `true` or `false`

   ```js
   let isStudent = true;
   ```

4. **Undefined**: declared but not assigned
5. **Null**: explicit "no value"
6. **Symbol** (ES6): unique identifiers

---

## Type Coercion & Conversion

* **Implicit** coercion happens in operations

  ```js
  console.log('5' - 2); // 3 (string -> number)
  console.log('5' + 2); // "52" (number -> string concatenation)
  ```

* **Explicit** conversion via constructors

  ```js
  Number('123'); // 123
  String(456);   // "456"
  Boolean(0);    // false
  ```

---

## Best Practices

* Prefer `const` by default, `let` when reassigning, avoid `var`.
* Use `===`/`!==` for strict equality (no type coercion).
* Name variables descriptively: `firstName`, `totalScore`, etc.

---

## Exercises

1. Declare a `const` called `radius` and assign a number.
2. Calculate circle area using `PI * radius * radius` and log with template literal.
3. Create a `let` variable `count`, increment it 3 times in a loop, log each value.
4. Coerce a string `"100"` to number and add `50`.
5. Explain difference between `null` and `undefined` in your own words (comment).

---
