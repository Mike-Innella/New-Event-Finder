// GLOBAL ELEMENTS
const burgerButton = document.querySelector(".burger__button");
const logoWrapper = document.querySelector(".logo__wrapper");
const darkMode = document.getElementById("toggleContrast");
const modalBackground = document.querySelector(".modal__background");

// DOMS
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", moveBackground);
  document
    .getElementById("aboutButton")
    ?.addEventListener("click", () => toggleModal("toggleAbout"));
  document
    .getElementById("contactButton")
    ?.addEventListener("click", () => toggleModal("toggleContact"));
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

  modalBackground.style.display = "flex";
  modalBackground.style.visibility = "visible";
  modalBackground.style.opacity = "0";
  modalBackground.style.transform = "translateX(-100%)";

  setTimeout(() => {
    modal.style.opacity = "1";
    modal.style.transform = "translateX(0)";
    modalBackground.style.opacity = "1";
    modalBackground.style.transform = "translateX(0)";
  }, 10);

  document.body.classList.add("modal-open");
}

function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.opacity = "0";
    modal.style.transform = "translateX(-100%)";
    modalBackground.style.transform = "translateX(100%)";
  });

  modalBackground.style.opacity = "0";

  setTimeout(() => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
      modal.style.visibility = "hidden";
    });

    modalBackground.style.display = "none";
  }, 300); // Match CSS transition duration

  document.body.classList.remove("modal-open");
}

// Add close modal logic for background click
if (modalBackground) {
  modalBackground.addEventListener("click", closeModal);
} else {
  console.error("Modal background not found.");
}

// Form Submit & Overlays

// Ensure DOM is loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".contact__form")
    ?.addEventListener("submit", handleSubmit);
});

// Handle Form Submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent page reload

  const contactForm = document.querySelector(".contact__form");
  const loaderOverlay = document.querySelector(".overlay--loading");
  const successOverlay = document.querySelector(".overlay--success");

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    alert("Please fill out all required fields.");
    return;
  }

  // Show loading overlay
  loaderOverlay.classList.remove("hidden");

  // Data to be sent (modify this based on your email service)
  const data = {
    name: name,
    email: email,
    message: message,
  };

  fetch("/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json();
    })
    .then(() => {
      // Hide loader, show success message
      loaderOverlay.classList.add("hidden");
      successOverlay.classList.remove("hidden");

      // Reset form after submission
      contactForm.reset();

      // Close modal after a delay
      setTimeout(() => {
        closeModal();
        successOverlay.classList.add("hidden");
      }, 2000);
    })
    .catch((error) => {
      console.error("Error:", error);
      loaderOverlay.classList.add("hidden");
      alert("There was an error sending your message. Please try again.");
    });
}

// BURGER MENU
function toggleMenu() {
  const menu = document.querySelector(".menu");
  if (!menu) {
    console.error("Menu element not found.");
    return;
  }

  menu.classList.toggle("menu--open");

  const opacityValue = menu.classList.contains("menu--open") ? "0" : "1";
  const delay = menu.classList.contains("menu--open") ? 200 : 800;

  setTimeout(() => {
    burgerButton.style.opacity = opacityValue;
    logoWrapper.style.opacity = opacityValue;
    darkMode.style.opacity = opacityValue;
  }, delay);
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
