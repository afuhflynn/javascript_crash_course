// 1. radius & area
const radius = 5;
const area = Math.PI * radius ** 2;
console.log(`Radius: ${radius}, Area: ${area.toFixed(2)}`);

// 2. count loop
let count = 0;
while (count < 3) {
  count++;
  console.log(`Count is now: ${count}`);
}

// 3. coercion example
const strNum = "100";
const total = Number(strNum) + 50;
console.log(`"100" -> number + 50 = ${total}`);

// 4. null vs undefined
let x;
console.log(x); // undefined
const y = null;
console.log(y); // null
// undefined: variable declared but no value; null: explicit empty value
