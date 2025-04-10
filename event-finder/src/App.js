import React, { useEffect } from "react";
import "../src/css/layout.css";
import emailjs from "emailjs-com";
import Layout from "../src/components/layout.jsx";

const App = () => {
  useEffect(() => {
    // EMAIL INITIALIZATION
    emailjs.init("cePFoU8dvsaDAlAyz");

    // GLOBAL ELEMENTS
    const burgerButton = document.querySelector(".burger__button");
    const logoWrapper = document.querySelector(".logo__wrapper"); // Placeholder: Add logic if needed
    const darkMode = document.getElementById("toggleContrast"); // Placeholder: Add logic if needed
    const modalBackground = document.querySelector(".modal__background");
    const headerWrapper = document.getElementById("navItemWrap");
    const searchSection = document.getElementById("searchSection");
    const menu = document.querySelector(".menu");

    let isBurgerMenuOpen = false;

    // DOMS
    document.addEventListener("DOMContentLoaded", () => {
      document
        .getElementById("aboutButton")
        ?.addEventListener("click", () => toggleModal("toggleAbout"));
      document
        .getElementById("contactButton")
        ?.addEventListener("click", () => toggleModal("toggleContact"));

      const menuLinks = menu?.querySelectorAll("li");
      menuLinks?.forEach((link) => {
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
      burgerButton.style.display = "none";
      burgerButton.style.opacity = "0";

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
        burgerButton.style.display = "flex";
        burgerButton.style.opacity = "1";
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

    // CONTACT FORM
    const contactForm = document.querySelector(".contact__form");

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const loadingOverlay = document.querySelector(".overlay--loading");
        loadingOverlay.classList.add("show");
        loadingOverlay.classList.remove("hidden");

        const successOverlay = document.querySelector(".overlay--success");
        successOverlay.classList.remove("show");
        successOverlay.classList.add("hidden");

        emailjs
          .sendForm("service_mygmail", "template_dfltemailtemp", this)
          .then((response) => {
            console.log("Success:", response);
            setTimeout(() => {
              loadingOverlay.classList.remove("show");
              loadingOverlay.classList.add("hidden");

              successOverlay.classList.add("show");
              successOverlay.classList.remove("hidden");

              contactForm.reset();
            }, 4800);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    }

    // BACKGROUND MOVE
    const scaleFactor = 1 / 20;
    const wrappers = document.querySelectorAll(".shape__wrapper");

    function moveBackground(event) {
      const x = event.clientX * scaleFactor;
      const y = event.clientY * scaleFactor;

      wrappers.forEach((wrapper, i) => {
        const boolInt = i % 2 !== 0 ? -1 : 1;
        wrapper.style.transform = `translate(${x * boolInt}px, ${
          y * boolInt
        }px)`;
      });
    }

    document.addEventListener("mousemove", moveBackground);

    // BURGER MENU TOGGLE
    function toggleMenu() {
      if (!menu) {
        console.error("Menu element not found.");
        return;
      }

      isBurgerMenuOpen = !isBurgerMenuOpen;
      menu.classList.toggle("menu--open");
    }
  }, []);

  return (
    <Layout>
      <h1>Welcome to Event Finder</h1>
      <p>Find events near you!</p>
      <button onClick={() => console.log("Dark mode toggle placeholder")}>
        Toggle Dark Mode
      </button>
    </Layout>
  );
};

export default App;
