// form validation

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name validation: English and Ukrainian letters only
  if (!/^[A-Za-zА-ЩЬЮЯЄІЇҐа-щьюяєіїґ\s-]+$/.test(name)) {
    alert("Name should contain only English or Ukrainian letters.");
    return;
  }

  // Email validation
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Message validation
  if (message.length === 0) {
    alert("Message cannot be empty.");
    return;
  }

  // If all validations pass
  alert("Form submitted successfully! (demo)");
  form.reset();
});
