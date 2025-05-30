# Lesson 10: The Date Object

## Table of Contents

* [Introduction to Date](#introduction-to-date)
* [Creating Dates](#creating-dates)

  * [Current Date & Time](#current-date--time)
  * [From Timestamp](#from-timestamp)
  * [From Date String](#from-date-string)
* [Date Methods](#date-methods)

  * [Getters](#getters)
  * [Setters](#setters)
* [Formatting Dates](#formatting-dates)
* [Date Arithmetic](#date-arithmetic)
* [Timezones & UTC](#timezones--utc)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Introduction to Date

JavaScript's `Date` object allows working with dates and times.

---

## Creating Dates

### Current Date & Time

```js
const now = new Date();
```

### From Timestamp

```js
const fromTs = new Date(1620000000000);
```

### From Date String

```js
const fromStr = new Date('2025-05-30T12:00:00Z');
```

---

## Date Methods

### Getters

* `getFullYear()`, `getMonth()`, `getDate()`
* `getHours()`, `getMinutes()`, `getSeconds()`
* `getTime()` returns timestamp

```js
const d = new Date();
console.log(d.getFullYear(), d.getMonth(), d.getDate());
```

### Setters

* `setFullYear()`, `setMonth()`, `setDate()`

```js
d.setFullYear(2030);
```

---

## Formatting Dates

Use methods or `toLocaleDateString()`:

```js
console.log(now.toLocaleDateString('en-US')); // MM/DD/YYYY
```

---

## Date Arithmetic

Add or subtract milliseconds:

```js
const tomorrow = new Date(d.getTime() + 24 * 60 * 60 * 1000);
```

---

## Timezones & UTC

UTC methods: `getUTCHours()`, etc.

```js
console.log(now.getUTCHours());
```

---

## Real-World Use Cases

* Displaying timestamps in apps
* Scheduling events or reminders
* Calculating durations or differences

---

## Exercises

1. Create a `Date` object for your birthday and log the weekday name.
2. Format the current date as `YYYY-MM-DD HH:MM:SS`.
3. Compute the difference in days between two dates.
4. Add 90 minutes to the current time and log the result.
5. Convert a date string in `MM/DD/YYYY` format to a `Date` object and back to ISO string.

---

For more exercises checkout: [Exercises](./Exercise.txt) and for solution to the exercises checkout: [Solution](./solution.js)
