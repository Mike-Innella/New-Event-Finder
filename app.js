// GLOBAL ELEMENTS
const burgerButton = document.querySelector(".burger__button");
const logoWrapper = document.querySelector(".logo__wrapper");
const darkMode = document.getElementById("toggleContrast");
const modalBackground = document.querySelector(".modal__background");
const headerWrapper = document.getElementById("navItemWrap");
const searchSection = document.getElementById("searchSection");
const menu = document.querySelector(".menu");

// Tracking the state of the burger menu
let isBurgerMenuOpen = false;

// DOMS
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", moveBackground);
  document
    .getElementById("aboutButton")
    ?.addEventListener("click", () => toggleModal("toggleAbout"));
  document
    .getElementById("contactButton")
    ?.addEventListener("click", () => toggleModal("toggleContact"));

  // Event Listeners for menuLinks
  const menuLinks = menu.querySelectorAll("li");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const modalId = link.dataset.modalId;
      if (modalId) {
        toggleModal(modalId);
      }

      if (isBurgerMenuOpen) {
        toggleMenu();
      }
    });
  });
});

// DARK MODE
function toggleContrast() {
  document.body.classList.toggle("dark__mode");
}

// MODALS
function toggleModal(modalId) {
  console.log(`Toggling modal: ${modalId}`);
  const modal = document.getElementById(modalId);

  if (!modal || !modalBackground) {
    console.log("Modal or background not found!");
    return;
  }

  if (modal.style.display === "flex") {
    closeModal();
  } else {
    openModal(modal);
  }
}

function openModal(modal) {
  modal.style.display = "flex";
  modal.style.visibility = "visible";
  modal.style.opacity = "0";
  modal.style.transform = "translateX(100%)";
  searchSection.style.visibility = "hidden";
  searchSection.style.opacity = "0";
  headerWrapper.style.visibility = "hidden";
  headerWrapper.style.opacity = "0";

  modalBackground.style.display = "flex";
  modalBackground.style.visibility = "visible";
  modalBackground.style.opacity = "0";
  modalBackground.style.transform = "translateX(-100%)";

  setTimeout(() => {
    modal.style.opacity = "1";
    modal.style.transform = "translateX(0)";
    modalBackground.style.opacity = "1";
    modalBackground.style.transform = "translateX(0)";
  }, 48);

  document.body.classList.add("modal-open");

  // Close the burger menu when modal opens
  if (isBurgerMenuOpen) {
    toggleMenu();
  }
}

function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.opacity = "0";
    modal.style.transform = "translateX(-100%)";
    searchSection.style.visibility = "visible";
    searchSection.style.opacity = "1";
    headerWrapper.style.visibility = "visible";
    headerWrapper.style.opacity = "1";
  });

  if (modalBackground) {
    modalBackground.style.transform = "translateX(100%)";
    modalBackground.style.opacity = "0";
  }

  setTimeout(() => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
      modal.style.visibility = "hidden";
    });

    if (modalBackground) {
      modalBackground.style.display = "none";
    }
  }, 400);

  document.body.classList.remove("modal-open");
}

// Add close modal logic for background click
if (modalBackground) {
  modalBackground.addEventListener("click", closeModal);
} else {
  console.error("Modal background not found.");
}

// BURGER MENU
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const searchSection = document.getElementById("searchSection");
  if (!menu) {
    console.error("Menu element not found.");
    return;
  }

  // Toggle the burger menu open/close state
  isBurgerMenuOpen = !isBurgerMenuOpen;

  menu.classList.toggle("menu--open");

  const opacityValue = isBurgerMenuOpen ? "0" : "1";
  const delay = isBurgerMenuOpen ? 0 : 0;

  setTimeout(() => {}, delay);
}

// SHAPE SPIN
const scaleFactor = 1 / 20;
const wrappers = document.querySelectorAll(".shape__wrapper");

function moveBackground(event) {
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  wrappers.forEach((wrapper, i) => {
    const boolInt = i % 2 !== 0 ? -1 : 1;
    wrapper.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  });
}
