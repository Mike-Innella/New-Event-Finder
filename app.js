// GLOBAL ELEMENTS
// CONSTS
const burgerButton = document.querySelector(".burger__button");
const logoWrapper = document.querySelector(".logo__wrapper");
const darkMode = document.getElementById("toggleContrast");
const aboutModal = document.getElementById("toggleAbout");
const modalBackground = document.getElementById("modalBackground");

// DOMS
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", moveBackground);

  // Ensure the modal button exists before adding event listener
  const modalButton = document.getElementById("modalButton");
  if (modalButton) {
    modalButton.addEventListener("click", () => toggleModal("toggleAbout"));
  } else {
    console.error("Modal button not found.");
  }
});

// DARK MODE
function toggleContrast() {
  document.body.classList.toggle("dark__mode");
}

// MODALS
// Toggle Modal Function
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) {
    console.error(`Modal with ID '${modalId}' not found.`);
    return;
  }

  console.log("Toggling modal:", modal);

  const isOpen = modal.classList.contains("show");
  console.log(`Modal is currently ${isOpen ? "open" : "closed"}`);

  if (isOpen) {
    modal.classList.remove("show");
    if (modalBackground) modalBackground.classList.remove("show");
    document.body.classList.remove("modal-open");
  } else {
    modal.classList.add("show");
    if (modalBackground) modalBackground.classList.add("show");
    document.body.classList.add("modal-open");
  }
}

// Close modal when clicking on the modal background
if (modalBackground) {
  modalBackground.addEventListener("click", function () {
    document.querySelectorAll(".modal.show").forEach((modal) => {
      modal.classList.remove("show");
    });

    this.classList.remove("show");
    document.body.classList.remove("modal-open");
  });
} else {
  console.error("Modal background not found.");
}

// BURGER MENU
function toggleMenu() {
  const menu = document.querySelector(".menu");
  if (!menu) {
    console.error("Menu element not found.");
    return;
  }

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

// SHAPE SPIN
const scaleFactor = 1 / 25;
const wrappers = document.querySelectorAll(".shape__wrapper");

function moveBackground(event) {
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  wrappers.forEach((wrapper, i) => {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    wrapper.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  });
}
