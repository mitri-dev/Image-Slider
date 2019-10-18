// Elements
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const auto = true;
const intervalTime = 5000;
let slideInterval;

// listeners
leftBtn.addEventListener('click', () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
rightBtn.addEventListener('click', () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Functions
function nextSlide() {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

function prevSlide() {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

// Auto-slide
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
