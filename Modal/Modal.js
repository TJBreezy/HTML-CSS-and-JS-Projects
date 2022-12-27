// Get a reference to the content div
let content = document.querySelector(".content");

// Get a reference to the info paragraph
let info = document.querySelector(".info");

// Get a reference to the open button
let openButton = document.querySelector(".open-btn");

// Get a reference to the overlay div
let overlay = document.querySelector(".overlay");

// Get a reference to the open content div
let openContent = document.querySelector(".open-content");

// Get a reference to the close button
let closeButton = document.querySelector(".close-btn");

// Get a reference to the open info paragraph
let openInfo = document.querySelector(".open-info");

openButton.addEventListener("click", function(){
  overlay.style.visibility ="visible"
});

closeButton.addEventListener("click", function(){
  overlay.style.visibility ="hidden"
})