# Lesson 7: Objects & Prototypes

## Table of Contents

* [Object Basics](#object-basics)

  * [Creating Objects](#creating-objects)
  * [Accessing Properties](#accessing-properties)
  * [Property Shorthand & Computed Keys](#property-shorthand--computed-keys)
* [Object Methods](#object-methods)
* [`this` Keyword](#this-keyword)
* [Prototypes & Inheritance](#prototypes--inheritance)

  * [Prototype Chain](#prototype-chain)
  * [Adding Methods to Prototypes](#adding-methods-to-prototypes)
* [Built-in Prototypes](#built-in-prototypes)
* [Object Utilities](#object-utilities)

  * [`Object.keys()`](#objectkeys)
  * [`Object.values()`](#objectvalues)
  * [`Object.entries()`](#objectentries)
  * [`Object.assign()`](#objectassign)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Object Basics

### Creating Objects

```js
const person = {
  name: 'Alice',
  age: 30
};
```

### Accessing Properties

```js
console.log(person.name); // dot notation
console.log(person['age']); // bracket notation
```

### Property Shorthand & Computed Keys

```js
const x = 10;
const obj = { x, ['prop_' + x]: x * 2 };
```

---

## Object Methods

Functions as values:

```js
const calculator = {
  add(a, b) { return a + b; },
  square(a) { return a * a; }
};
```

---

## `this` Keyword

Refers to calling context:

```js
const user = {
  name: 'Bob',
  greet() { console.log(`Hi, I'm ${this.name}`); }
};
user.greet();
```

---

## Prototypes & Inheritance

### Prototype Chain

Every object has an internal prototype link `__proto__`:

```js
console.log(user.__proto__ === Object.prototype); // true
```

### Adding Methods to Prototypes

```js
function Person(name) { this.name = name; }
Person.prototype.sayHello = function() { console.log(`Hello, ${this.name}`); };
const p = new Person('Carol');
p.sayHello();
```

---

## Built-in Prototypes

You can extend built-ins (caution):

```js
Array.prototype.first = function() { return this[0]; };
console.log([1,2,3].first());
```

---

## Object Utilities

### `Object.keys()`

Returns array of keys.

### `Object.values()`

Returns array of values.

### `Object.entries()`

Returns array of `[key, value]` pairs.

### `Object.assign()`

Merges objects.

```js
const a = { x:1 }; const b = { y:2 };
const merged = Object.assign({}, a, b);
```

---

## Real-World Use Cases

* Modeling entities with properties and methods
* Sharing behavior via prototypes in libraries
* Cloning and merging config objects
* Reflecting keys/values for dynamic UI rendering

---

## Exercises

1. Create an object `book` with title, author, and `read()` method that logs "Reading title by author".
2. Using the `book` object, add a new property `year` using bracket notation.
3. Create a constructor function `Car(make, model)` and add a prototype method `info()`.
4. Use `Object.keys()`, `Object.values()`, and `Object.entries()` on the `book` object.
5. Merge two objects `{a:1}` and `{b:2}` into a new object using `Object.assign()`.

---

For more exercises checkout: [Exercises](./Exercise.txt) and for solution to the exercises checkout: [Solution](./solution.js)
