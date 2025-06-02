# Lesson 13: JavaScript Client-Side Library (jQuery)

## Table of Contents

* [Introduction to jQuery](#introduction-to-jquery)
* [Selecting Elements](#selecting-elements)
* [DOM Manipulation](#dom-manipulation)

  * [.text() & .html()](#text--html)
  * [.attr() & .removeAttr()](#attr--removeattr)
  * [.addClass(), .removeClass(), .toggleClass()](#addclass-removeclass-toggleclass)
* [Event Handling](#event-handling)

  * [.on()](#on)
  * [Shorthand methods](#shorthand-methods)
* [Effects & Animations](#effects--animations)

  * [.hide(), .show(), .toggle()](#hide-show-toggle)
  * [.fadeIn(), .fadeOut()](#fadein-fadeout)
  * [.slideUp(), .slideDown()](#slideup-slidedown)
* [AJAX with jQuery](#ajax-with-jquery)
* [Chaining](#chaining)
* [Plugin Usage](#plugin-usage)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## Introduction to jQuery

A lightweight library simplifying DOM operations, event handling, animations, and AJAX with a concise syntax: `$(selector).action()`.

---

## Selecting Elements

```js
// Select by tag, class, id
const items = $('li');
const active = $('.active');
const header = $('#main-header');
```

---

## DOM Manipulation

### .text() & .html()

```js
$('p').text('Hello');
$('div').html('<strong>Bold</strong>');
```

### .attr() & .removeAttr()

```js
$('img').attr('src', 'image.jpg');
$('img').removeAttr('alt');
```

### .addClass(), .removeClass(), .toggleClass()

```js
$('nav').addClass('sticky');
$('nav').toggleClass('hidden');
```

---

## Event Handling

### .on()

```js
$('#btn').on('click', function() {
  alert('Clicked!');
});
```

### Shorthand

```js
$('#btn').click(() => console.log('Clicked'));  
```

---

## Effects & Animations

### .hide(), .show(), .toggle()

```js
$('.box').hide();
$('.box').show();
$('.box').toggle();
```

### .fadeIn(), .fadeOut()

```js
$('.box').fadeIn(500);
$('.box').fadeOut(500);
```

### .slideUp(), .slideDown()

```js
$('.box').slideUp();
$('.box').slideDown();
```

---

## AJAX with jQuery

```js
$.ajax({ url: '/data', method: 'GET' })
  .done(data => console.log(data))
  .fail(err => console.error(err));
```

---

## Chaining

```js
$('#btn').addClass('active').text('Working').fadeIn(300);
```

---

## Plugin Usage

Include via `<script>` and initialize: `$('.slider').slick();`

---

## Real-World Use Cases

* Quick prototyping
* Legacy projects
* Simple AJAX calls
* Small-scale animations

---

## Exercises

1. Use jQuery to hide all paragraphs when a button is clicked.
2. Change the background color of list items on hover using `.hover()`.
3. Fetch JSON data from a public API with `$.getJSON()` and log results.
4. Create a simple image slider plugin initialization example.
5. Chain multiple methods: select a div, change text, add class, and slide down.

---

For more exercises checkout: [Exercises](./Exercises.txt) and for solution to the exercises checkout: [Solution](./solution.js)
