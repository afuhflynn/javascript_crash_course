// Solutions

// Exercises in NOTES.md
// 1.
const nameElement = document.getElementById("name");
nameElement.textContent = "Your Name";

// 2.
const toggleClassButton = document.getElementById("toggle-class-btn");
toggleClassButton.addEventListener("click", () => {
  const elementToToggle = document.querySelector(".toggle-target");
  elementToToggle.classList.toggle("active");
});

// 3.
const dynamicList = document.getElementById("dynamic-list");
for (let i = 1; i <= 5; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Dynamic Item ${i}`;
  dynamicList.appendChild(listItem);
}

// 4.
const inputField = document.getElementById("live-input");
const displayField = document.getElementById("live-display");
inputField.addEventListener("input", (event) => {
  displayField.textContent = event.target.value;
});

// 5.
const removeButton = document.getElementById("remove-btn");
removeButton.addEventListener("click", () => {
  const list = document.getElementById("dynamic-list");
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
});

// Exercises in Exercises.txt
// 1.
const title = document.getElementById("title");
title.textContent = "Your Name";

// 2.
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", () => {
  const para = document.querySelector("p");
  para.classList.toggle("hidden");
});

// 3.
const ul = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  ul.append(li);
}
document.body.append(ul);

// 4.
const input = document.getElementById("user-input");
const mirror = document.getElementById("mirror");
input.addEventListener("input", (e) => {
  mirror.textContent = e.target.value;
});

// 5.
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  const list = document.querySelector("ul");
  list.innerHTML = "";
});
