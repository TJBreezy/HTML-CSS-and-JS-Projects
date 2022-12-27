const span = document.getElementById("color");
const btn = document.getElementById("btn");
const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
const simpleColors = [
  "green",
  "blue",
  "white",
  "red",
  "brown",
  "grey",
  "yellow",
  "purple",
  "beige",
  "maroon",
];

const hexValues = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function choice(colorNotation){
  document.body.style.backgroundColor = colorNotation;
  span.textContent = colorNotation;
  span.style.color = colorNotation;
}

function hexBtn(){
  btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let value = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[value];
  }
  choice(hex);
  hex = "";
});
}

function simpleBtn(){
  btn.addEventListener("click", function () {
  let pick = Math.floor(Math.random() * simpleColors.length + 1);
  choice(simpleColors[pick]);
});
}

simple.onclick = simpleBtn;
hex.onclick = hexBtn;
