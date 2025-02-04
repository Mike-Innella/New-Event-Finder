// GLOBAL CONSTANTS
const burgerButton = document.querySelector(".burger__button");
const logoWrapper = document.querySelector(".logo__wrapper");

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
    }, 200);
  } else {
    setTimeout(() => {
      burgerButton.style.opacity = "1";
      logoWrapper.style.opacity = "1";
    }, 800);
  }
}
