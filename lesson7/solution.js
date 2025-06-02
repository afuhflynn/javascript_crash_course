// Solutions

// NOTE: Just follow along with the solution in lesson9 you will learn more about functions

// Exercises in NOTES.md
// 1.
const cuisines = ["Italian", "Japanese", "Mexican", "Indian"];
console.log(cuisines[0]); // First item
console.log(cuisines[cuisines.length - 1]); // Last item

// 2.
cuisines.push("Thai", "French");
cuisines.shift();
console.log(cuisines);

// 3.
for (const cuisine of cuisines) {
  console.log(cuisine.toUpperCase());
}

// 4.
const nameLengths = cuisines.map((cuisine) => cuisine.length);
console.log(nameLengths);

// 5.
const longCuisines = cuisines.filter((cuisine) => cuisine.length > 5);
console.log(longCuisines);

// 6.
const totalCharacters = cuisines.reduce(
  (total, cuisine) => total + cuisine.length,
  0
);
console.log(totalCharacters);

// Exercises in Exercises.txt
// 1.
const book = {
  title: "The Hobbit",
  author: "Tolkien",
  read() {
    console.log(`Reading ${this.title} by ${this.author}`);
  },
};
book.read();

// 2.
book["year"] = 1937;
console.log(book.year);

// 3.
function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}`;
};
const b = new Book("Dune", "Herbert");
console.log(b.getSummary());

// 4.
const obj = { x: 1, y: 2 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// 5.
const o1 = { a: 1 },
  o2 = { b: 2 },
  o3 = { c: 3 };
const combined = Object.assign({}, o1, o2, o3);
console.log(combined);
