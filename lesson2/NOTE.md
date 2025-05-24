
# Lesson 2: Strings & Template Literals

## Table of Contents

* [String Basics](#string-basics)
* [Escape Sequences](#escape-sequences)
* [Template Literals](#template-literals)
* [String Methods](#string-methods)
* [String Concatenation](#string-concatenation)
* [Accessing individual elements in a string](#accessing-individual-elements-in-a-string)
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
const userName = 'Afuh';
const score = 95;
const msg = `Student ${userName} scored
${score}% on the test.`; // Multi-line string
console.log(msg);
```

---

## String Methods

* `.length`: Returns the length of the string.
* `.toUpperCase()`: Returns the string as upperCase (all letters capitalized)
* `.toLowerCase()`: Returns the string as lowerCase
* `.trim()`: Removes preceding whitespaces from the outer bounds of the string
* `.split()`: Returns an array of all the values in the string based on a certain key used for splitting it.
* `.includes()`: Returns `false` if the the key passed in is not found is the string else `true`.
* `.slice(start, end)`: Returns a sub-set of the string based on a starting and ending index.
* `.concat(value)`: Returns the string combined with the value passed in as a single string.

```js
let phrase = "  JavaScript Rocks!  ";
console.log(phrase.trim()); //JavaScript Rocks! (with no whitespace)
console.log(phrase.toUpperCase());// JAVASCRIPT ROCKS! (with whitespaces)
console.log(phrase.split(' '));// [ '', '', 'JavaScript', 'Rocks!', '', '' ] (splits the string at every white space found)
console.log(phrase.slice(2, 12)); // JavaScript
console.log(phrase.length); // 21
console.log(phrase.includes("john")); // false
console.log(phrase.concat("john")); //   JavaScript Rocks!  john
```

---

## String Concatenation

This involves combining two or more strings together to form a single string
`hint: In JS we can concatenate strings with almost anything`

```js
const firstName = "Afuh";
const lastName = "Flynn";

// NOTE: Using the plus (+) operator
const fullName = firstName + " " + lastName;
console.log(lastName); // Afuh Flynn

const year = 2025;
console.log("Hello " + lastName + ", welcome to " + year); // Concatenating a string with a number

// NOTE: Using the `.concat` method
const firstName = "Afuh ";
const lastName = "Flynn";
const fullName = firstName.concat(lastName);
console.log(fullName); // Afuh Flynn
```

---

## Accessing individual elements in a string

In this case we either use string `inbuilt` methods or use `indexes` just like with `arrays`

```js
const userName = "Flynn";
// NOTE: Using the `.charAt` method
console.log(userName.charAt(3)); // n (Returns the element at index 3)

// NOTE: Using the `index` methodology `similar to arrays`
console.log(userName[0]); // F (Returns the element at index 0)

// This is how string manipulation, concat and element accessing are used in real world applications
const firstName = "Afuh";
const lastName = "Flynn";
const avatarPlaceHolder = firstName.charAt(0).concat(lastName.charAt(0)); // AF
// OR:
const avatarPlaceHolder = firstName[0].concat(lastName[0]); // AF
// OR:
const firstFirstNameChar = firstName[0]; // A
const firstLastNameChar = lastName[0]; // F
const avatarPlaceHolder = firstFirstNameChar.concat(firstLastNameChar); // AF
// OR:
const avatarPlaceHolder = firstFirstNameChar + firstLastNameChar; // AF
```

## Exercises

1. Declare a string with your favorite quote (multiline using backticks).
2. Trim whitespace and convert to lowercase.
3. Check if the string includes a specific word.
4. Split a comma-separated list into an array.
5. Extract a substring between two indices.

---

`HINT: The best way to learn something new about strings is basically appending a dot (.) at the end of the string name then your editor's intellisense will display a list of methods and string properties that you can make use of. NOTE: This also works for all the other data types.`

For more exercises checkout: [Exercises](./Exercise.txt)
