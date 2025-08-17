// function for downloan HTML in element by ID
function loadHTML(url, placeholderId, callback) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Ошибка загрузки ${url}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(placeholderId).innerHTML = data;
      if (callback) callback();
    })
    .catch((err) => console.error(err));
}

// function for setting active itme of menu
function setActiveNav() {
  const navLinks = document.querySelectorAll("#navbarNav .nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// waitin for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // download header, and set active link
  loadHTML("includes/header.html", "header-placeholder", setActiveNav);

  // download footer
  loadHTML("includes/footer.html", "footer-placeholder");
});
