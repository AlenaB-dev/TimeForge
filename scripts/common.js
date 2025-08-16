// header

fetch("includes/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.documentElementById("header-placeholder").innerHTML = data;
  });

// footer

fetch("includes/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
