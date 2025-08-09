/** logic for main page navigation*/

const content = document.getElementById("content");

const homeContent = `
  <div class="welcoming">
    <p>
      At TimeForge, we believe that every second counts. Our mission is to
      bring together watch enthusiasts, collectors, and curious minds from
      around the world to explore the fascinating world of horology.
    </p>
    <p>
      Discover the latest industry news, in-depth reviews, and a carefully
      curated catalog of timepieces crafted by the world’s most renowned
      brands. Whether you’re a seasoned collector or just starting your
      journey, TimeForge is your trusted companion in the art and science of
      watchmaking.
    </p>
    <p>
      Join us as we celebrate craftsmanship, innovation, and timeless style
      — because here, precision truly meets passion.
    </p>
  </div>
`;

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

document.getElementById("link-home").addEventListener("click", function (e) {
  e.preventDefault();
  content.innerHTML = homeContent;
});

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
