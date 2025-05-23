
# Lesson 2: Strings & Template Literals

**File: `Lesson2/NOTES.md`**

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

---

**File: `Lesson2/practicals.js`**

```js
// 1. Favorite quote
const quote = `
  "The only limit to our realization of tomorrow
   is our doubts of today." - Franklin D. Roosevelt
`;
console.log(quote);

// 2. Trim & lowercase
const raw = "   HELLO Gen Z!   ";
const clean = raw.trim().toLowerCase();
console.log(clean); // "hello gen z!"

// 3. includes()
console.log(clean.includes('gen z')); // true

// 4. split list
const list = "apple,banana,cherry";
const fruits = list.split(',');
console.log(fruits); // ["apple","banana","cherry"]

// 5. substring
const text = "JavaScript ES6+ features";
console.log(text.slice(0, 10)); // "JavaScript"
```

---

**File: `Lesson2/Exercises.txt`**

```
1. Define a multiline string and log it.
2. Use at least three string methods on a given string.
3. Write a function that takes a sentence and returns the number of words.
4. Bonus: Reverse a string.
```

---

**File: `Lesson2/solution.js`**

```js
// Solutions

// 3. word count function
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}
console.log(wordCount("  Hello world from JS   ")); // 4

// 4. reverse string
function reverseString(s) {
  return s.split('').reverse().join('');
}
console.log(reverseString('GenZ')); // "ZneG"
```
