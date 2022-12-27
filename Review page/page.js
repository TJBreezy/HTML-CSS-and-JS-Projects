// Get a reference to the review container element
let reviewContainer = document.getElementById("review-container");

// Get a reference to the reviewer image element
let reviewerImage = document.getElementById("reviewer-image");

// Get a reference to the reviewer name element
let reviewerName = document.getElementById("reviewer-name");

let reviewRole = document.getElementById("role");

// Get a reference to the review text element
let reviewText = document.getElementById("review-text");

// Get a reference to the next button element
let nextButton = document.getElementById("next-button");

let reviews = [
  {
    image: "amy-hirschi-b3AYk8HKCl0-unsplash.jpg",
    name: "Sarah",
    role: "DESIGNER",
    review:
      "I've been using this product for a few weeks now, and I have to say that I'm really impressed. It's easy to use, and it really works! I've noticed a significant improvement in my skin since I started using it. I would definitely recommend this product to others.",
  },
  {
    image: "ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
    name: "Mike",
    role: "INTERN",
    review:
      "This product is a game-changer! I've tried so many different skincare products in the past, but none of them have worked as well as this one. My skin looks and feels so much healthier since I started using it. I can't wait to see what other benefits it has in store for me. Highly recommend!",
  },
  {
    image: "christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
    name: "Emily",
    role: "STUDENT",
    review:
      "I've been using this product for about a month now, and I've already seen a noticeable difference in my skin. It's smoother, clearer, and just overall looks healthier. I love how easy it is to use, too. I'll definitely be repurchasing when I run out!",
  },
  {
    image: "omar-yehia-toCKeKuQpL0-unsplash.jpg",
    name: "Rachel",
    role: "PROJECT MANAGER",
    review:
      "I was hesitant to try this product at first, but I'm so glad I did! It's made a huge difference in my skin. It's clearer, softer, and just overall looks better. Plus, it's easy to use and fits seamlessly into my skincare routine. Highly recommend!",
  },
];

let i = 1;
window.addEventListener("DOMContentLoaded", function () {
  reviewerImage.src = reviews[0].image;
  reviewerName.textContent = reviews[0].name;
  role.textContent = reviews[0].role;
  reviewText.textContent = reviews[0].review;
});

nextButton.addEventListener("click", function () {
  reviewerImage.src = reviews[i].image;
  reviewerName.textContent = reviews[i].name;
  role.textContent = reviews[i].role;
  reviewText.textContent = reviews[i].review;
  let lastIndex = reviews.length - 1;
  if (i === lastIndex) {
    i = 0;
  } else {
    i += 1;
  }
});
