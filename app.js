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
  }, 300); // Match CSS transition duration

  document.body.classList.remove("modal-open");
}

// Add close modal logic for background click
if (modalBackground) {
  modalBackground.addEventListener("click", closeModal);
} else {
  console.error("Modal background not found.");
}

// Initialize EmailJS with your public key
emailjs.init("cePFoU8dvsaDAlAyz");

// Handle Form Submission
function handleSubmit(event) {
  event.preventDefault(); // Stops page reload
  console.log("Form submission intercepted.");

  const contactForm = document.querySelector(".contact__form");
  const loaderOverlay = document.querySelector(".overlay--loading");
  const successOverlay = document.querySelector(".overlay--success");

  if (!contactForm) {
    console.error("Contact form not found.");
    return;
  }

  // Double check that the form submission is not being triggered elsewhere
  if (event.target && event.target.type === "submit") {
    console.log("Submit button clicked");
  }

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    alert("Please fill out all required fields.");
    return;
  }

  // Show loading overlay
  if (loaderOverlay) loaderOverlay.classList.remove("hidden");

  // Send form data via EmailJS
  if (window.emailjs) {
    emailjs
      .sendForm("service_mygmail", "template_dfltemailtemp", contactForm)
      .then(() => {
        console.log("Email sent successfully!");

        // Hide loader and show success overlay
        if (loaderOverlay) loaderOverlay.classList.add("hidden");
        if (successOverlay) successOverlay.classList.remove("hidden");

        contactForm.reset();

        // Optionally hide success message after 2 seconds
        setTimeout(() => {
          if (successOverlay) successOverlay.classList.add("hidden");
        }, 4800);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        if (loaderOverlay) loaderOverlay.classList.add("hidden");
        alert("There was an error sending your message. Please try again.");
      });
  } else {
    console.error("EmailJS not initialized.");
  }
}

// Attach the event listener properly if it's not already
const contactForm = document.querySelector(".contact__form");
if (contactForm) {
  contactForm.addEventListener("submit", handleSubmit);
} else {
  console.error("Contact form not found.");
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
    if (burgerButton) burgerButton.style.opacity = opacityValue;
    if (logoWrapper) logoWrapper.style.opacity = opacityValue;
    if (darkMode) darkMode.style.opacity = opacityValue;
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
