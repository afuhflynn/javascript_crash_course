// Practicals and explanations

// 1. Test falsy values
const testVals = [false, 0, "", null, undefined, NaN];
console.log(testVals.map((v) => Boolean(v)));

// 2. isBetween
const isBetween = (x, min, max) => x > min && x < max;
console.log(isBetween(5, 1, 10)); // true

// 3. Default config
function getConfig(cfg) {
  const limit = (cfg && cfg.limit) || 100;
  return { limit };
}
console.log(getConfig());

// 4. darkMode toggle\let dark = false;
function toggleDark() {
  dark = !dark;
  return dark;
}
console.log(toggleDark(), toggleDark());
