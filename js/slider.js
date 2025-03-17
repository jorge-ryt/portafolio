let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.card');
  const totalSlides = slides.length;

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * (slides[0].offsetWidth + 20);  // 20 is the margin between cards
  document.querySelector('.slider-container').style.transform = `translateX(${newTransformValue}px)`;
}
