# Lesson 12: DOM Manipulation

## Table of Contents

* [What is the DOM?](#what-is-the-dom)
* [Selecting Elements](#selecting-elements)
  * [getElementById](#getelementbyid)
  * [querySelector & querySelectorAll](#queryselector--queryselectorall)
* [Traversing the DOM](#traversing-the-dom)
  * [parentNode, children, nextElementSibling](#parentnode-children-nextelementsibling)
* [Modifying Elements](#modifying-elements)
  * [textContent & innerHTML](#textcontent--innerhtml)
  * [setAttribute & removeAttribute](#setattribute--removeattribute)
  * [classList methods](#classlist-methods)
* [Creating & Inserting Elements](#creating--inserting-elements)
  * [createElement](#createelement)
  * [append, prepend, before, after](#append-prepend-before-after)
* [Event Handling](#event-handling)
  * [addEventListener](#addeventlistener)
  * [this vs event.target](#this-vs-eventtarget)
* [Removing Elements](#removing-elements)
* [Real-World Use Cases](#real-world-use-cases)
* [Exercises](#exercises)

---

## What is the DOM?
The Document Object Model represents HTML as a tree of nodes that JavaScript can manipulate.

---

## Selecting Elements

### getElementById
```js
const header = document.getElementById('main-header');
````

### querySelector & querySelectorAll

```js
const firstItem = document.querySelector('.item');
const allItems = document.querySelectorAll('.item');
```

---

## Traversing the DOM

```js
const list = document.querySelector('ul');
console.log(list.parentNode);
console.log(list.children[0]);
console.log(list.nextElementSibling);
```

---

## Modifying Elements

### textContent & innerHTML

```js
header.textContent = 'Hello World';
element.innerHTML = '<span>Updated</span>';
```

### setAttribute & removeAttribute

```js
element.setAttribute('data-id', '123');
element.removeAttribute('data-id');
```

### classList

```js
element.classList.add('active');
element.classList.toggle('hidden');
```

---

## Creating & Inserting Elements

```js
const newLi = document.createElement('li');
newLi.textContent = 'New Item';
const ul = document.querySelector('ul');
ul.append(newLi);
```

Also `prepend`, `before`, `after`.

---

## Event Handling

```js
button.addEventListener('click', function(event) {
  console.log(this); // the button
  console.log(event.target);
});
```

---

## Removing Elements

```js
const item = document.querySelector('.item');
item.remove();
```

---

## Real-World Use Cases

* Dynamic content updates
* Form validation feedback
* Single-page-app navigation
* Interactive UI components

---

## Exercises

1. Select an element by ID and change its text to your name.
2. Toggle a CSS class on a button click.
3. Create a list of 5 items dynamically and append to a UL.
4. Add an input field and listen for `input` events to display the current value in real time.
5. Remove the last list item when a "Remove" button is clicked.

---

For more exercises checkout: [Exercises](./Exercises.txt) and for solution to the exercises checkout: [Solution](./solution.js)
