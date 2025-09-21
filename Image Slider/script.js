const slides = document.getElementById('slides');
const images = slides.querySelectorAll('img');
const totalImages = images.length;
let index = 0;

// set width of slides dynamically
slides.style.width = `${totalImages * 100}vw`;

function showSlide(i) {
  index = (i + totalImages) % totalImages; // wrap around
  slides.style.transform = `translateX(${-index * window.innerWidth}px)`;
}

// Buttons
document.getElementById('nextBtn').addEventListener('click', () => showSlide(index + 1));
document.getElementById('prevBtn').addEventListener('click', () => showSlide(index - 1));

// Auto slide every 3 seconds
setInterval(() => showSlide(index + 1), 3000);

// Adjust on resize
window.addEventListener('resize', () => showSlide(index));