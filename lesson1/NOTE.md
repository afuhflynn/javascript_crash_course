# Lesson 1: Variables & Data Types

## Table of Contents

* [Introduction](#introduction)
* [Variable declaration](#variable-declaration)
* [Data Types](#data-types)
  * [Primitive Data Types](#primitive-data-types)
  * [Non-Primitive Data Types](#non-primitive-data-types)
  * [Type Constructors](#type-constructors)
* [Variable naming conventions](#variable-naming-conventions)
* [Type Coercion & Conversion](#type-coercion--conversion)
* [Best Practices](#best-practices)
* [Exercises](#exercises)

---

## Introduction

Variables are containers for storing data values. In JavaScript
>or
Variables are labels for data.

## Variable declaration

You declare variables with `var`, `let`, or `const`.

### `var`

Variables declared with the *var* keyword are globally accessible from any point within a certain source file.

* Function-scoped
* Can be redeclared

```js
var count = 1;
var count = 2; // okay
```

### `let`

Variables declared with the *let* keyword are only accessible within the block in which they are defined.

* Block-scoped
* Cannot be redeclared in same scope

```js
let user = 'Alice';
// let user = 'Bob'; // ❌ Error: Identifier 'user' has already been declared
```

### `const`

Variables declared with the *const* keyword are only accessible within the block in which they are defined.

* Block-scoped
* Read-only binding (value can be an object whose properties mutate)

```js
const PI = 3.1415;
// PI = 3.14; // ❌ TypeError: Assignment to constant variable.
```

---

## Data Types

### Primitive Data Types

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

### Non-Primitive Data Types

1. **Undefined**: declared but not assigned
2. **Null**: explicit "no value"
3. **Symbol** (ES6): unique identifiers

---

### Type Constructors

This are objects or classes inbuilt into javascript that help in type casting (conversion) and creation of a certain datatype by constructing it.

* *The constructors always return an object that represents the appropriate data type*

There are three primary type constructors:

> **String Constructor**

```js
const name = String("Afuh Flynn"); // Constructor
let year = 2025;
year = String(year);
console.log(name); // Afuh Flynn
console.log(typeof year); // string
```

> **Number Constructor**

```js
const num = Number(10); // Constructor
let year = "2025";
year = Number(year);
console.log(num); // 10
console.log(typeof year); // number
```

> **Boolean Constructor**

```js
const isTrue = Number(true); // Constructor
let x = "true";
x = Boolean(x);
console.log(isTrue); // true
console.log(typeof x); // boolean
```

---

### Variable naming conventions

There are three most used and widely accepted variable naming conventions.

**Camel Casing**: `Starts with lowerCase word and then proceeds with the first letter of each word in the variable name being upperCase`

   ```js
   const studentName = "JohnDoe";
   const numberOfChildren = 20;
   ```

**Pascal Casing**: `Every word in the variable name starts with an UpperCase letter`

   ```js
   const StudentName = "JohnDoe";
   const NumberOfChildren = 20;
   ```

**Snake Casing**: `Every word in the variable name is separated from the other by an underscore (_)`

   ```js
   const student_name = "JohnDoe";
   const number_of_children = 20;
   ```

---

## Type Coercion & Conversion

This involves casting or conversion of a data type from one type to another explicitly or implicitly

* **Implicit** coercion happens in operations

  ```js
  console.log('5' - 2); // 3 (string -> number)
  console.log('5' + 2); // "52" (number -> string concatenation)
  ```

* **Explicit** conversion via constructors

  ```js
  console.log(Number('123')); // 123
  console.log(String(456));   // "456"
  console.log(Boolean(0));    // false
  ```

---

## Best Practices

* Prefer `const` by default, `let` when reassigning, avoid `var`.
* Use `===`/`!==` for strict equality (no type coercion).
* Name variables descriptively: `firstName`, `totalScore`, etc. But not too long

---

## Exercises

1. Declare a `const` called `radius` and assign a number.
2. Calculate circle area using `PI * radius * radius` and log with template literal.
3. Coerce a string `"100"` to number and add `50`.
4. Explain difference between `null` and `undefined` in your own words (comment).

---

For more exercises checkout: [Exercises](./Exercise.txt)
