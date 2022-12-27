// Get the count display element
let countDisplay = document.getElementById("count-display");

// Get the decrease button element
let decreaseButton = document.getElementById("decrease-button");

// Get the reset button element
let resetButton = document.getElementById("reset-button");

// Get the increase button element
let increaseButton = document.getElementById("increase-button");
countDisplay.style.color="black"
let number = 0;
increaseButton.addEventListener("mousedown", function () {
  number = ++ number;
  countDisplay.textContent= number;
  countDisplay.style.color="green";
});

decreaseButton.addEventListener("mousedown", function () {
  number = --number ;
  countDisplay.textContent= number;
  countDisplay.style.color="red";
});

resetButton.addEventListener("click",function(){
number=0;
countDisplay.textContent=number;
countDisplay.style.color="black";
});

