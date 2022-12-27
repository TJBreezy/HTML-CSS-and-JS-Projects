const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const Btn = question.querySelector(".btn");
  const openBtn = question.querySelector(".open-btn");
  const closeBtn = question.querySelector(".close-btn");
  const explanation = question.querySelector(".two");

  openBtn.addEventListener("click", function () {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    explanation.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    explanation.style.display = "none";
  });
});
