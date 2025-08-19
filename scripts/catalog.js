// Get elements
const catalog = document.querySelector(".catalog");
const items = Array.from(catalog.querySelectorAll(".catalog-item"));
const sortSelect = document.getElementById("sort");
const categorySelect = document.getElementById("category");

// Rendering function (clean and paste in rigth order)
function renderItems(filteredItems) {
  catalog.innerHTML = "";
  filteredItems.forEach((item) => catalog.appendChild(item));
}

// Function popularity click
items.forEach((item) => {
  const button = item.querySelector("button");
  button.addEventListener("click", () => {
    // increase data-popularity by 1
    item.dataset.popular = Number(item.dataset.popular) + 1;

    // if the sort mode is "popular", update the catalog
    if (sortSelect.value === "popular") {
      updateCatalog();
    }
  });
});

// Filtering and sorting function
function updateCatalog() {
  let filtered = items;

  // Filter by category
  const category = categorySelect.value;
  if (category !== "all") {
    filtered = filtered.filter((item) => item.dataset.category === category);
  }

  // Sorting
  const sort = sortSelect.value;
  if (sort === "price-low") {
    filtered.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (sort === "price-high") {
    filtered.sort((a, b) => b.dataset.price - a.dataset.price);
  } else if (sort === "popular") {
    filtered.sort((a, b) => b.dataset.popular - a.dataset.popular);
  } else if (sort === "new") {
    filtered.sort(
      (a, b) => new Date(b.dataset.date) - new Date(a.dataset.date)
    );
  }

  renderItems();
}

// Events on selects
sortSelect.addEventListener("change", updateCatalog);
categorySelect.addEventListener("change", updateCatalog);

// Primary rendering
updateCatalog();
