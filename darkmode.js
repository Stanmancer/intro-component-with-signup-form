"use strict";

const toggleBtn = document.querySelector(".dark-mode-toggle");
// const body = document.querySelector("body");
const iconContainer = document.querySelector(".toggle-icon-container");
const toggleIcon = document.querySelector(".toggle-icon");

let darkMode = localStorage.getItem("darkMode");

function enableDarkmode() {
  document.body.classList.add("dark-mode");
  iconContainer.classList.add("dark-mode");
  toggleIcon.classList.add("fa-moon");
  toggleIcon.classList.remove("fa-sun");

  localStorage.setItem("darkMode", "enabled");
}

function disableDarkmode() {
  document.body.classList.remove("dark-mode");
  iconContainer.classList.remove("dark-mode");
  toggleIcon.classList.remove("fa-moon");
  toggleIcon.classList.add("fa-sun");

  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkmode();
}

toggleBtn.addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});
