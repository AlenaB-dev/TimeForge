/** banner slides */

const slides = document.querySelectorAll(".watches-slides img");
let current = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// showing first slide
showSlide(current);

// changing img every 4 sec
setInterval(nextSlide, 4000);

// reveal .welcoming text
const welcomingBlock = document.querySelector(".welcoming");

function revealTextOnScroll() {
  const rect = welcomingBlock.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight - 100) {
    welcomingBlock.classList.add("visible");
    window.removeEventListener("scroll", revealTextOnScroll);
  }
}

// listenning scroll
window.addEventListener("scroll", revealTextOnScroll);
revealTextOnScroll();

// reveal .main-block
const mainBlocks = document.querySelectorAll(".main-block");

function revealMainBlocks() {
  const windowHeight = window.innerHeight;

  mainBlocks.forEach((block) => {
    if (!block) return; // защита от null
    const rect = block.getBoundingClientRect();
    if (rect.top <= windowHeight - 100) {
      block.classList.add("visible");
    }
  });
}

// listening scroll
window.addEventListener("scroll", revealMainBlocks);

revealMainBlocks();
