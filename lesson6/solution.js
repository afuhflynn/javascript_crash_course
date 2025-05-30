// Solutions

// Exercises in NOTES.md
// 1.
const cuisines = ["Italian", "Japanese", "Mexican", "Indian"];
console.log(cuisines[0]); // "Italian"
console.log(cuisines[cuisines.length - 1]); // "Indian"

// 2.
cuisines.push("Thai", "French");
cuisines.shift();
console.log(cuisines); // ["Japanese", "Mexican", "Indian", "Thai", "French"]

// 3.
for (const cuisine of cuisines) {
  console.log(cuisine.toUpperCase());
}

// 4.
const cuisineLengths = cuisines.map((cuisine) => cuisine.length);
console.log(cuisineLengths); // [8, 7, 6, 4, 6]

// 5.
const longCuisines = cuisines.filter((cuisine) => cuisine.length > 5);
console.log(longCuisines); // ["Japanese", "Mexican", "Indian"]

// 6.
const totalCharacters = cuisines.reduce(
  (total, cuisine) => total + cuisine.length,
  0
);
console.log(totalCharacters); // 31

// Exercises in Exercises.txt
// 1.
const movies = ["Inception", "Matrix", "Interstellar"];
console.log(movies.length); // 3

// 2.
movies.push("The Dark Knight");
movies.pop();
console.log(movies); // ["Inception", "Matrix", "Interstellar"]

// 3.
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// 4.
movies.forEach((movie, index) => {
  console.log(`Index: ${index}, Movie: ${movie}`);
});

// 5.
const movieLengths = movies.map((movie) => movie.length);
console.log(movieLengths);

// 6.
const longMovies = movies.filter((movie) => movie.length > 5);
console.log(longMovies);
