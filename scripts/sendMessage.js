// form validation

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual submission

  let isValid = true;

  // Clear previous errors
  form
    .querySelectorAll(".invalid-feedback")
    .forEach((el) => (el.textContent = ""));
  form
    .querySelectorAll(".form-control")
    .forEach((el) => el.classList.remove("is-invalid"));

  // Name validation: English and Ukrainian letters only
  const name = document.getElementById("name");
  if (!/^[A-Za-zА-ЩЬЮЯЄІЇҐа-щьюяєіїґ\s-]+$/.test(name.value.trim())) {
    const error = name.nextElementSibling;
    error.textContent =
      "Name should contain only English or Ukrainian letters.";
    name.classList.add("is-invalid");
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email");
  if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    const error = email.nextElementSibling;
    error.textContent = "Please enter a valid email address.";
    email.classList.add("is-invalid");
    isValid = false;
  }

  // Message validation: English and Ukrainian letters, basic punctuation
  const message = document.getElementById("message");
  const messageRegex = /^[A-Za-zА-ЩЬЮЯЄІЇҐа-щьюяєіїґ0-9\s.,!?'"()-]+$/; // буквы, цифры, пробелы и знаки
  if (message.value.trim() === "") {
    const error = message.nextElementSibling;
    error.textContent = "Message cannot be empty.";
    message.classList.add("is-invalid");
    isValid = false;
  } else if (!messageRegex.test(message.value.trim())) {
    const error = message.nextElementSibling;
    error.textContent =
      "Message can contain only English or Ukrainian letters and basic punctuation.";
    message.classList.add("is-invalid");
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    form.submit();
  }
});
