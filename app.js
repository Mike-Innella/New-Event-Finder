// GLOBAL CONSTANTS
const burgerButton = document.querySelector(".burger__button");
const logoWrapper = document.querySelector(".logo__wrapper");
const darkMode = document.getElementById("toggleContrast");

// DARK MODE
function toggleContrast() {
  document.body.classList.toggle("dark__mode");
}

// BURGER MENU
function toggleMenu() {
  const menu = document.querySelector(".menu");

  menu.classList.toggle("menu--open");

  if (menu.classList.contains("menu--open")) {
    setTimeout(() => {
      burgerButton.style.opacity = "0";
      logoWrapper.style.opacity = "0";
      darkMode.style.opacity = "0";
    }, 200);
  } else {
    setTimeout(() => {
      burgerButton.style.opacity = "1";
      logoWrapper.style.opacity = "1";
      darkMode.style.opacity = "1";
    }, 800);
  }
}
