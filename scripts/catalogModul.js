document.querySelectorAll(".view-details").forEach((bnt, index) => {
  bnt.addEventListener("click", () => {
    const item = bnt.closest(".catalog-item");
    const title = item.querySelector("h3").innerText;
    const price = item.querySelector("p").innerText;
    const imgSrc = item.querySelector("img").src;

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalImage").src = imgSrc;

    const specs = `
<li>Category: ${item.dataset.category}</li>
<li>Popularity: ${item.dataset.popular}</li>
<li>Date: ${item.dataset.date}</li>
`;
    document.getElementById("modalSpecs").innerHTML = specs;
  });
});
