// Solutions

// Exercises in NOTES.md
// 1. Create a `Date` object for your birthday and log the weekday name.
const myBirthday = new Date("1995-06-25"); // Replace with your actual birthday
console.log(days[myBirthday.getDay()]);

// 2. Format the current date as `YYYY-MM-DD HH:MM:SS`.
console.log(formatDate(new Date()));

// 3. Compute the difference in days between two dates.
const date1 = new Date("2023-12-01");
const date2 = new Date("2023-12-25");
console.log(daysBetween(date1, date2));

// 4. Add 90 minutes to the current time and log the result.
const currentTime = new Date();
const timePlus90Minutes = new Date(currentTime.getTime() + 90 * 60 * 1000);
console.log(timePlus90Minutes);

// 5. Convert a date string in `MM/DD/YYYY` format to a `Date` object and back to ISO string.
const dateString = "08/15/2023";
const dateParts = dateString.split("/");
const convertedDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
console.log(convertedDate.toISOString());

// Exercises in Exercises.txt
// 1.
const birthday = new Date("1990-07-15");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days[birthday.getDay()]);

// 2.
function formatDate(d) {
  const pad = (n) => n.toString().padStart(2, "0");
  const YYYY = d.getFullYear();
  const MM = pad(d.getMonth() + 1);
  const DD = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}
console.log(formatDate(new Date()));

// 3.
function daysBetween(a, b) {
  const diffMs = Math.abs(a - b);
  return Math.floor(diffMs / (24 * 60 * 60 * 1000));
}
const d1 = new Date("2025-01-01");
const d2 = new Date("2025-05-30");
console.log(daysBetween(d1, d2));

// 4.
const now = new Date();
const plus90 = new Date(now.getTime() + 90 * 60 * 1000);
console.log(plus90);

// 5.
const input = "12/31/2024";
const parts = input.split("/");
const dt = new Date(parts[2], parts[0] - 1, parts[1]);
console.log(dt.toISOString());
