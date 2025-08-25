// JSON with articles
const articles = [
  {
    title: "Retro is Back: Timex Intrepid Dimepiece",
    date: "2025-08-15",
    shortDescription:
      "Timex reimagines the iconic Intrepid watch from 1995 in a modern 36 mm version.",
    fullDescription:
      "Inspired by the style of the ’90s and JFK Jr.'s legacy, the new Timex Intrepid Dimepiece embraces a gender-neutral aesthetic. Priced at $239, it quickly became popular among fashion-focused collectors.",
    source:
      "https://www.marieclaire.com/fashion/timex-intrepid-dimepiece-watch/",
    popularity: 120,
  },
  {
    title: "The World’s First 3D-Printed Watch by Apiar",
    date: "2025-08-02",
    shortDescription:
      "Apiar introduces Gen1.0, the first fully 3D-printed titanium watch.",
    fullDescription:
      "Apiar unveiled Gen1.0 with minimal waste (14g), 39mm titanium case, and La Joux-Perret movement. Price: £2,250 including VAT. Gen1.0 sets a benchmark for sustainable production in watchmaking.",
    source:
      "https://www.wallpaper.com/watches-jewellery/3d-printed-watch-apiar",
    popularity: 90,
  },
  {
    title: "Watches & Wonders 2025: Key Trends in Modern Watchmaking",
    date: "2025-08-10",
    shortDescription:
      "Highlights of the biggest watch fair in 2025: compact cases, 5 Hz movements, bold colors.",
    fullDescription:
      "Over 60 brands presented innovations from Rolex, Grand Seiko, Chopard, and Cartier. Trends include compact cases, pastel and candy-tone dials, technical mastery combined with playful design.",
    source:
      "https://www.theaustralian.com.au/life/wish/best-watch-launches-of-2025-from-tag-heuer-to-hublot/news-story/83c1e6c6321d8543577352c4cde80dab",
    popularity: 150,
  },
  {
    title: "Omega Seamaster Heritage 75th Anniversary Edition",
    date: "2025-07-10",
    shortDescription:
      "Omega released a limited edition Seamaster for its 75th anniversary.",
    fullDescription:
      "Limited to 1,947 pieces with a blue 'Summer Blue' dial and Co-Axial Master Chronometer movement. Price: $7,500. Collectors are excited about this anniversary edition.",
    source: "https://www.omegawatches.com/news/seamaster-75th-anniversary",
    popularity: 80,
  },
  {
    title: "Casio G-Shock Digital Hidden Glow Series Released",
    date: "2025-06-18",
    shortDescription:
      "Casio expands its G-Shock lineup with the Digital Hidden Glow Series.",
    fullDescription:
      "This series includes DW-6900HDS-7JF, GA-110HDS-7AJF, and GA-2100HDS-7AJF. Features unique designs and Tough Solar. Available now at up to 30% discount.",
    source: "https://www.sakurawatches.com/june-2025-new-arrivals",
    popularity: 110,
  },
];

const container = document.getElementById("articlesContainer");
const searchInput = document.querySelector(".article-search-input");
const sortSelect = document.querySelector(".article-sort-select");

// Function for displaying articles
function displayArticles(list) {
  container.innerHTML = "";
  list.forEach((article) => {
    const articleBlock = document.createElement("article");
    articleBlock.className = "article-block";
    articleBlock.innerHTML = `
      <h2>${article.title}</h2>
      <p>Date: ${article.date}</p>
      <p><strong>Short description:</strong> ${article.shortDescription}</p>
      <details>
        <summary>Read more</summary>
        ${article.fullDescription}
        <p>Source: <a href="${article.source}" target="_blank">${article.source}</a></p>
      </details>
    `;
    container.appendChild(articleBlock);
  });
}

// Sort by date (new on top by default)
function sortArticles(list, method) {
  if (method === "newest") {
    return list.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (method === "oldest") {
    return list.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (method === "popular") {
    return list.sort((a, b) => b.popularity - a.popularity);
  } else {
    return list;
  }
}

// Search and filter
function filterArticles() {
  const keyword = searchInput.value.toLowerCase();
  const filtered = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(keyword) ||
      article.shortDescription.toLowerCase().includes(keyword)
  );
  const sorted = sortArticles(filtered, sortSelect.value);
  displayArticles(sorted);
}

// Initial output
displayArticles(sortArticles([...articles], "newest"));

// Events
searchInput.addEventListener("input", filterArticles);
sortSelect.addEventListener("change", filterArticles);

// Button "Go up"
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Showing button after scrolling
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Smooth scrolling
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
