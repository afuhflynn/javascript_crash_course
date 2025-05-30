// Solutions

// Exercises in NOTES.md
// 1.
$(document).ready(function () {
  $("button").click(function () {
    $("p").hide();
  });
});

// 2.
$("li").hover(
  function () {
    $(this).css("background-color", "lightblue");
  },
  function () {
    $(this).css("background-color", "");
  }
);

// 3.
$.getJSON("https://jsonplaceholder.typicode.com/posts", function (data) {
  console.log("Fetched Data:", data);
});

// 4.
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
});

// 5.
$("div").text("New Content").addClass("highlight").slideDown();

// Exercises in Exercises.txt
// 1.
const arr = [10, -5, 20, 0];
console.log("Max:", Math.max(...arr));
console.log("Min:", Math.min(...arr));

// 2.
function randInt(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}
for (let i = 0; i < 5; i++) {
  console.log("Roll:", randInt(1, 20));
}

// 3.
const floats = [1.2, 2.5, 3.7];
const ints = floats.map((f) => Math.round(f));
console.log(ints);

// 4.
for (let i = 0; i < 3; i++) {
  console.log("Die roll:", randInt(1, 6));
}

// 5.
function circleArea(r) {
  return Math.PI * Math.pow(r, 2);
}
console.log("Area for r=3:", circleArea(3));
