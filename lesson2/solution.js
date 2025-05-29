// Solutions

// Exercises in NOTE.md
// 1
let quote = `    Imagination is the DNA of all inventions    `;
console.log(quote);

// 2.
quote = quote.trim().toLowerCase();
console.log(quote);

// 3
const result = quote.includes("imagination");
console.log(result);
// OR
// const result = quote.indexOf("imagination");

// 4
let names = "John, Roy, Faith, Jude, Judith, Flynn";
names = names.split(",");
console.log(names);

// 5
let str_sub = names[0] + names[names.length - 1]; // HINT: length - 1 = last item starting from 0 index

// Exercises in Exercise.txt
// 1
let message = `
Welcome to this JavaScript Crash Course. 
It's been a great pleasure having you here in this course so far
By @afuhflynn with ♥️
`;
console.log(message);

// 2
names = "John, Job, Jacob";
console.log(names.toLocaleLowerCase());
console.log(names.toUpperCase());
console.log(names.replace(",", "**"));
console.log(names.substring(0, 8));

// 3
const myName = "JohnDoe";
const myAge = 40;
const isStudent = true;
console.log(
  `Hello, there my name is ${myName} and I am ${myAge} years old. But guess what, I am a student: ${isStudent}`
);
