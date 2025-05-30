# Lesson 8: Expressions & Operators

## Table of Contents

* [Expressions](#expressions)

  * [Literal Expressions](#literal-expressions)
  * [Identifier Expressions](#identifier-expressions)
  * [Member Expressions](#member-expressions)
* [Operators](#operators)

  * [Arithmetic Operators](#arithmetic-operators)
  * [Assignment Operators](#assignment-operators)
  * [Comparison Operators](#comparison-operators)
  * [Logical Operators](#logical-operators)
  * [String Operators](#string-operators)
  * [Unary Operators](#unary-operators)
  * [Ternary Operator](#ternary-operator)
* [Operator Precedence & Associativity](#operator-precedence--associativity)
* [Type Coercion](#type-coercion)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Expressions

### Literal Expressions

Values written directly in code:

```js
42
"hello"
true
```

### Identifier Expressions

Variables or function names:

```js
let x = 10;
x + 5;
```

### Member Expressions

Access object properties or array elements:

```js
user.name
arr[0]
```

---

## Operators

### Arithmetic Operators

`+`, `-`, `*`, `/`, `%`, `**`

```js
5 + 3;  // 8
2 ** 4; // 16
```

### Assignment Operators

`=`, `+=`, `-=`, `*=`, `/=`

```js
let c = 10;
c += 5; // 15
```

### Comparison Operators

`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

```js
5 === '5'; // false
5 == '5';  // true
```

### Logical Operators

Discussed in Lesson 4: `&&`, `||`, `!`

### String Operators

Concatenation with `+`

```js
"Hello, " + "world";
```

### Unary Operators

`typeof`, `!`, unary `+` and `-`

```js
typeof 5;    // "number"
+"42";     // 42
```

### Ternary Operator

`condition ? expr1 : expr2`

```js
let status = age >= 18 ? 'adult' : 'minor';
```

---

## Operator Precedence & Associativity

Determines order of evaluation. Use parentheses to clarify:

```js
2 + 3 * 4;      // 14
(2 + 3) * 4;    // 20
```

---

## Type Coercion

Automatic conversion of types in expressions:

```js
"5" - 2;   // 3
"5" + 2;   // "52"
```

---

## Real-World Use Cases

* Calculations in forms with arithmetic operators
* Default values with `||` and `?`
* Conditional assignment with ternary
* Parsing user input with unary `+`

---

## Exercises

1. Use arithmetic operators to compute the area and perimeter of a rectangle with width and height variables.
2. Demonstrate difference between `==` and `===` with examples.
3. Use `+=` and `*=` assignment operators to update a counter and a score variable.
4. Show how string concatenation and template literals produce the same result.
5. Convert a string to a number using unary `+` and `Number()` and log both types.

---

For more exercises checkout: [Exercises](./Exercise.txt) and for solution to the exercises checkout: [Solution](./solution.js)
