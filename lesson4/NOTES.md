# Lesson 4: Booleans & Logic

## Table of Contents

* [Boolean Values](#boolean-values)
  * [The boolean constructor](#the-boolean-constructor)
* [Truthy & Falsy](#truthy--falsy)
* [Logical Operators](#logical-operators)

  * AND `&&`
  * OR `||`
  * NOT `!`
* [Short-Circuit Evaluation](#short-circuit-evaluation-and-logical-operations)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Boolean Values

Booleans can accept only two possible values: `true` or `false`.

```js
let isValid = true;
let isDone = false;
```

---

### The Boolean Constructor

Just like the string and number data types, booleans can also be created with the `Boolean() constructor`

```js
let isValid = Boolean(true);
let isDone = Boolean(false);
const isTrue = Boolean(0);
const isGood = Boolean(1);
```

---

## Truthy & Falsy

Values coerced to Boolean in conditions:

* **Falsy**: `0`, `''`, `null`, `undefined`, `NaN`, `false`
* **Truthy**: everything else

```js
if ('hello') console.log('truthy');
if (0) console.log('won\'t run');
```

---

## Logical Operators

### AND `&&`

Returns first falsy or last truthy.

```js
console.log(true && 'Alice');   // 'Alice'
console.log(false && 'Alice');  // false
```

### OR `||`

Returns first truthy or last falsy.

```js
console.log(false || 'Bob');    // 'Bob'
console.log(0 || null);         // null
```

### NOT `!`

Inverts Boolean.

```js
console.log(!true);  // false
console.log(!0);     // true  (0 is falsy)
```

---

## Short-Circuit Evaluation and Logical Operations

Use `&&`/`||` for defaults or guards.

```js
const user = null;
const name = user && user.name; // null, no error

const input = '';
const value = input || 'default'; // 'default'
```

---

## Real-World Use Cases

* Feature toggles (`isBeta && renderBeta()`)
* Default parameters (`opts.limit || 10`)
* Guard clauses in functions
* Modify UIs to display certain values based on user data states in reactive applications.

---

## Exercises

1. List all falsy values in JavaScript and test them.
2. Write `isBetween(x, min, max)` returning true if `min < x < max` using logical operators.
3. Provide a default value for a possibly `undefined` config object.
4. Toggle a `darkMode` flag: `let dark = !dark;` simulate state change.
5. Explain short-circuiting in a comment: difference between `&&` and `||`.

---

For more exercises checkout: [Exercises](./Exercise.txt) and for solution to the exercises checkout: [Solution](./solution.js)
