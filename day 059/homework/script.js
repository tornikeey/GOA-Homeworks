const paragraph = document.getElementById("text");
const bgBtn = document.getElementById("bgBtn");
const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");

bgBtn.addEventListener("click", () => {
  paragraph.style.backgroundColor = "lightblue";
});

colorBtn.addEventListener("click", () => {
  paragraph.style.color = "red";
});

fontBtn.addEventListener("click", () => {
  paragraph.style.fontSize = "30px";
});

const countText = document.getElementById("countText");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  countText.textContent = `Count: ${count}`;
});