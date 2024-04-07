"use script";

const form = document.getElementById("sign-up-form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const setError = function (element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelectorAll(".error");

  for (const error of errorDisplay) {
    inputControl.classList.add("failed");
    error.classList.add("show-error");
  }
};

const setSuccess = function (element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelectorAll(".error");

  for (const error of errorDisplay) {
    inputControl.classList.remove("failed");
    error.classList.remove("show-error");
  }
};

const checkEmpty = function (element) {
  if (element.value.trim() === "") {
    setError(element);
  } else {
    setSuccess(element);
  }
};

// const isValidEmail = function (email) {
//   emailValue = email.value.trim();
//   if (!emailValue.contains("@")) setError(email);
// };

const checkPasswordStrength = function (password) {
  if (password.value.length < 8 && password.value !== "") {
    setError(password);
    password.parentElement.querySelector("small").textContent =
      "Password must be at least 8 characters long";
  }
};

const validateInputs = function () {
  checkEmpty(firstname);
  checkEmpty(lastname);

  checkEmpty(email);
  //   isValidEmail(email);

  checkEmpty(password);
  checkPasswordStrength(password);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});