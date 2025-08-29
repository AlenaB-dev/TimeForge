import { watchDetails } from "./catalogWatchSpecs.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".view-details").forEach((bnt) => {
    bnt.addEventListener("click", () => {
      const item = bnt.closest(".catalog-item");
      const id = item.dataset.id;
      const title = item.querySelector("h3").innerText;
      const price = item.querySelector("p").innerText;
      const imgSrc = item.querySelector("img").src;

      document.getElementById("modalTitle").innerText = title;
      document.getElementById("modalPrice").innerText = price;
      document.getElementById("modalImage").src = imgSrc;

      const specs = watchDetails[id]?.specs || ["No details available"];
      document.getElementById("modalSpecs").innerHTML = specs
        .map((s) => `<li>${s}</li>`)
        .join("");
    });
  });
});
