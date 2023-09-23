// DOM Elements
const nextColorBtn = document.getElementById("btn");
const colorCodeDisplay = document.getElementById("color-code-display");

// Array
const colorLetters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

nextColorBtn.addEventListener("click", nextColor);

let colortext = "";
function nextColor() {
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * colorLetters.length);
    let item = colorLetters[index];
    colortext += item.toString();
  }
  let colorCode = `#${colortext}`;
  colortext = "";
  document.documentElement.style.backgroundColor = colorCode;
  colorCodeDisplay.textContent = colorCode;
}
