// Practicals and explanations

// HINT: Creating Dates
const now = new Date();
console.log("Now:", now);

// HINT: Date from timestamp
const ts = 1620000000000;
const fromTs = new Date(ts);
console.log("From timestamp:", fromTs);

// HINT: Date from string
const fromStr = new Date("2025-05-30T12:00:00Z");
console.log("From string:", fromStr);

// HINT: Getter methods
console.log("Year:", now.getFullYear());
console.log("Month (0-indexed):", now.getMonth());
console.log("Day:", now.getDate());
console.log("Hour:", now.getHours(), "Minute:", now.getMinutes());

// HINT: Setter methods
const d = new Date();
d.setFullYear(2030);
d.setMonth(0); // January
console.log("Modified date:", d);

// HINT: Formatting
console.log("Locale date:", now.toLocaleDateString("en-GB"));
console.log("Locale time:", now.toLocaleTimeString("en-GB"));

// HINT: Date arithmetic
const oneDay = 24 * 60 * 60 * 1000;
const tomorrow = new Date(now.getTime() + oneDay);
console.log("Tomorrow:", tomorrow);

// HINT: UTC methods
console.log("UTC hours:", now.getUTCHours());
