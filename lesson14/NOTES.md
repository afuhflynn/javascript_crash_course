# Lesson 14: OOP in JavaScript

## Table of Contents

* [OOP Overview](#oop-overview)
* [Constructor Functions](#constructor-functions)
* [Prototypes & Prototype Chain](#prototypes--prototype-chain)
* [ES6 Classes](#es6-classes)
* [Inheritance](#inheritance)
* [Static Methods](#static-methods)
* [Getters & Setters](#getters--setters)
* [Private Fields & Encapsulation](#private-fields--encapsulation)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## OOP Overview

Object-Oriented Programming organizes code using objects that combine data and behavior. Key concepts:

* **Encapsulation**: bundling state and methods
* **Inheritance**: sharing functionality
* **Polymorphism**: same interface, different implementations

---

## Constructor Functions

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};
const alice = new Person('Alice', 30);
alice.greet();
```

---

## Prototypes & Prototype Chain

Every object links to a prototype:

```js
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
```

---

## ES6 Classes

```js
class Animal {
  constructor(species) {
    this.species = species;
  }
  speak() {
    console.log(`${this.species} makes a sound`);
  }
}
const cat = new Animal('Cat');
cat.speak();
```

---

## Inheritance

```js
class Dog extends Animal {
  constructor(name) {
    super('Dog');
    this.name = name;
  }
  speak() {
    console.log(`${this.name} barks`);
  }
}
const rex = new Dog('Rex');
rex.speak();
```

---

## Static Methods

```js
class MathUtil {
  static square(x) {
    return x * x;
  }
}
console.log(MathUtil.square(5));
```

---

## Getters & Setters

```js
class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
  get area() {
    return this.width * this.height;
  }
  set area(val) {
    this.width = Math.sqrt(val);
    this.height = Math.sqrt(val);
  }
}
const rect = new Rectangle(4, 9);
console.log(rect.area);
rect.area = 16;
console.log(rect.width, rect.height);
```

---

## Private Fields & Encapsulation

```js
class Counter {
  #count = 0;
  increment() {
    this.#count++;
  }
  get value() {
    return this.#count;
  }
}
const c = new Counter();
c.increment();
console.log(c.value);
```

---

## Real-World Use Cases

* Modeling UI components as classes
* Data models in frameworks (e.g., ORM entities)
* Reusable utilities with static methods

---

## Exercises

1. Create a constructor function `Car(make, model)` with a method `getInfo()`.
2. Rewrite `Car` as an ES6 class with same functionality.
3. Extend `Car` with a class `ElectricCar` adding `batteryLevel` and override `getInfo()`.
4. Add a static method `compare(a, b)` to `ElectricCar` to compare battery levels.
5. Implement getters/setters for `batteryLevel` ensuring it stays between 0–100.

---

For more exercises checkout: [Exercises](./Exercises.txt) and for solution to the exercises checkout: [Solution](./solution.js)
