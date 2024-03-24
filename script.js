const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", () => {
  nextSlide(-1);
});

nextBtn.addEventListener("click", () => {
  nextSlide(1);
});

let slideIdx = 1;

showSlide(slideIdx);

function nextSlide(n) {
  showSlide((slideIdx += n));
}

function currentSlide(n) {
  showSlide((slideIdx = n));
}

function showSlide(n) {
  let i;
  const slides = document.querySelectorAll(".slide");

  if (n > slides.length) {
    slideIdx = 1;
  }
  if (n < 1) {
    slideIdx = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides.forEach((slide) => {
    slide.classList.add("fade");
  });

  slides[slideIdx - 1].style.display = "block";
}
