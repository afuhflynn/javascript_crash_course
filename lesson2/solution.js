// Solutions

// 3. word count function
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}
console.log(wordCount("  Hello world from JS   ")); // 4

// 4. reverse string
function reverseString(s) {
  return s.split("").reverse().join("");
}
console.log(reverseString("GenZ")); // "ZneG"
