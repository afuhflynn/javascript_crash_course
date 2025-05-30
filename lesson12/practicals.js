// Practicals and explanations

// Selecting elements
const header = document.getElementById("main-header");
console.log(header);

const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");
console.log(firstItem, allItems);

// Traversing
const list = document.querySelector("ul");
console.log(list.parentNode, list.children[0], list.nextElementSibling);

// Modifying
header.textContent = "Welcome to DOM Lesson";
firstItem.innerHTML = "<strong>First Item</strong>";
firstItem.setAttribute("data-note", "highlight");
firstItem.classList.add("active");

// Creating & inserting
const newLi = document.createElement("li");
newLi.textContent = "Dynamically Added";
list.append(newLi);

// Event handling
const btn = document.getElementById("my-btn");
btn.addEventListener("click", function (e) {
  alert("Button clicked!");
});

// Removing
const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", () => {
  const last = list.lastElementChild;
  if (last) last.remove();
});
