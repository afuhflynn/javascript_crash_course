// Practicals and explanations

// HINT: Creating objects
const person = { name: "Alice", age: 30 };
console.log(person);

// HINT: Accessing properties
console.log(person.name);
console.log(person["age"]);

// HINT: Property shorthand & computed keys
const x = 5;
const obj = { x, ["key_" + x]: x * 2 };
console.log(obj);

// HINT: Object methods & this
const user = {
  name: "Bob",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
user.greet();

// HINT: Constructor & prototype
function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.info = function () {
  console.log(`Car: ${this.make} ${this.model}`);
};
const myCar = new Car("Tesla", "Model 3");
myCar.info();

// HINT: Extending built-in prototypes (caution)
Array.prototype.first = function () {
  return this[0];
};
console.log([10, 20, 30].first());

// HINT: Object utilities
const book = { title: "1984", author: "Orwell" };
console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book));

const a = { a: 1 },
  b = { b: 2 };
const merged = Object.assign({}, a, b);
console.log(merged);
