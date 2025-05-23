
# Lesson 2: Strings & Template Literals

## Table of Contents

* [String Basics](#string-basics)
* [Escape Sequences](#escape-sequences)
* [Template Literals](#template-literals)
* [String Methods](#string-methods)
* [Exercises](#exercises)

---

## String Basics

Strings are sequences of characters. You can use single (`'`), double (`"`), or backtick (`` ` ``) quotes.

```js
let single = 'Hello';
let double = "World";
let backtick = `!`;
console.log(single + ' ' + double + backtick); // "Hello World!"
```

---

## Escape Sequences

* `\n` new line
* `\t` tab
* `\\` backslash
* `\'` single quote

```js
console.log('Line1\nLine2');
```

---

## Template Literals

Backticks allow multi-line strings and interpolation with `${}`.

```js
const name = 'Afuh';
const score = 95;
const msg = `Student ${name} scored
${score}% on the test.`;
console.log(msg);
```

---

## String Methods

* `.length`
* `.toUpperCase()`, `.toLowerCase()`
* `.trim()`
* `.split()`
* `.includes()`
* `.slice(start, end)`

```js
let phrase = "  JavaScript Rocks!  ";
console.log(phrase.trim().toUpperCase());
console.log(phrase.split(' '));
console.log(phrase.slice(2, 12));
```

---

## Exercises

1. Declare a string with your favorite quote (multiline using backticks).
2. Trim whitespace and convert to lowercase.
3. Check if the string includes a specific word.
4. Split a comma-separated list into an array.
5. Extract a substring between two indices.

---
