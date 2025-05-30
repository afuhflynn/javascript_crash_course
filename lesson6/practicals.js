// Practicals and explanations

// HINT: Declaring arrays
const fruits = ["apple", "banana", "orange"];
console.log(fruits);

// HINT: Accessing array elements
console.log(fruits[0]); // apple

// HINT: Array length
console.log(fruits.length); // 3

// HINT: Adding elements (push)
fruits.push("mango");
console.log(fruits);

// HINT: Removing elements (pop)
const lastFruit = fruits.pop();
console.log(lastFruit); // mango
console.log(fruits);

// HINT: Iterating with for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// HINT: Iterating with for...of loop
for (const fruit of fruits) {
  console.log(fruit);
}

// HINT: forEach method
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// HINT: Using map to create a new array
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

// HINT: Using filter to create a subset
const filteredFruits = fruits.filter((fruit) => fruit.startsWith("b"));
console.log(filteredFruits);
