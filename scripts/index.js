/** logic for main page banner slides */

const watchesSlides = document.querySelectorAll(".watches-slides img");
let current = 0;

function showSlide(index) {
  watchesSlides.forEach((img, i) => {
    img.style.opacity = i === index ? "1" : "0";
  });
}

function nextSlide() {
  current = (current + 1) % watchesSlides.length;
  showSlide(current);
}

// showing first slide
showSlide(current);

// changing img every 4 sec

setInterval(nextSlide, 4000);

/** logic for main page navigation*/

const content = document.getElementById("content");

const articlesContent = `
      <h2>Articles</h2>
      <p>Here you can read the latest industry news and reviews on watches, horology, and more.</p>
      <p>Stay updated with expert insights and timeless stories.</p>
    `;

const catalogContent = `
      <h2>Catalog</h2>
      <p>Explore our curated selection of timepieces from top brands around the world.</p>
      <p>Find your perfect watch that matches your style and passion.</p>
    `;

document
  .getElementById("link-articles")
  .addEventListener("click", function (e) {
    e.preventDefault();
    content.innerHTML = articlesContent;
  });

document.getElementById("link-catalog").addEventListener("click", function (e) {
  e.preventDefault();
  content.innerHTML = catalogContent;
});
