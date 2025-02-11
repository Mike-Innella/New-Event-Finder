// GLOBAL ELEMENTS
const burgerButton = document.querySelector(".burger__button");
const logoWrapper = document.querySelector(".logo__wrapper");
const darkMode = document.getElementById("toggleContrast");
const modalBackground = document.querySelector(".modal__background");

// DOMS
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", moveBackground);

  // Ensure the modal buttons exist before adding event listeners
  const modalAboutButton = document.getElementById("modalAboutButton");
  if (modalAboutButton) {
    modalAboutButton.addEventListener("click", () =>
      toggleModal("toggleAbout")
    );
  } else {
    console.error("Modal About button not found.");
  }

  const modalContactButton = document.getElementById("modalContactButton");
  if (modalContactButton) {
    modalContactButton.addEventListener("click", () =>
      toggleModal("toggleContact")
    );
  } else {
    console.error("Modal Contact button not found.");
  }

  // Add close modal logic for background click
  if (modalBackground) {
    modalBackground.addEventListener("click", closeModal);
  } else {
    console.error("Modal background not found.");
  }
});

// DARK MODE
function toggleContrast() {
  document.body.classList.toggle("dark__mode");
}

// MODALS
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalBackground = document.querySelector(".modal__background");

  if (!modal || !modalBackground) {
    console.error(`Modal or modal background with ID '${modalId}' not found.`);
    return;
  }

  // Toggle the show class to show/hide modal
  modal.classList.toggle("show");
  modalBackground.classList.toggle("show");

  // Prevent body scroll when modal is open
  if (modal.classList.contains("show")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function closeModal() {
  document.querySelectorAll(".modal.show").forEach((modal) => {
    modal.classList.remove("show");
  });

  modalBackground.classList.remove("show");
  document.body.classList.remove("modal-open");
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
const scaleFactor = 1 / 20;
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
