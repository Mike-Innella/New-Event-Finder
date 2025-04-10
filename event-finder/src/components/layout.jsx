import React from "react";
import "../css/layout.css";

const Layout = ({ children }) => {
  const toggleModal = (modalId) => {
    const modal = document.getElementById(modalId);
    const background = document.getElementById("modalBackground");
    if (modal && background) {
      modal.classList.toggle("active");
      background.classList.toggle("active");
    }
  };

  const toggleContrast = () => {
    document.body.classList.toggle("high-contrast");
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header__wrapper">
        <div className="logo__wrapper" id="navItemWrap">
          <img src="/assets/Logo Black.PNG" alt="Logo" className="logo__img" />
        </div>

        {/* NAV */}
        <nav className="nav__bar" id="navItemWrap">
          <ul className="nav__list">
            <div className="item__wrapper">
              <button
                className="item__button"
                id="modalAboutButton"
                onClick={() => toggleModal("toggleAbout")}
              >
                <i className="fa-solid fa-question item__icon"></i>
              </button>
              <li className="nav__item">About</li>
            </div>
            <div className="item__wrapper">
              <button
                className="item__button"
                id="modalContactButton"
                onClick={() => toggleModal("toggleContact")}
              >
                <i className="fa-solid fa-envelope item__icon"></i>
              </button>
              <li className="nav__item">Contact Us</li>
            </div>
            <div className="item__wrapper">
              <button
                className="contrast__toggle"
                id="toggleContrast"
                onClick={toggleContrast}
              >
                <i className="fa-solid fa-circle-half-stroke item__icon"></i>
              </button>
            </div>
          </ul>

          {/* MODALS */}
          <div className="modal__background" id="modalBackground"></div>

          <div className="modals">
            <div className="modal modal__about" id="toggleAbout">
              <div className="about__wrapper">
                <h3 className="section__title">About Us</h3>
                <p className="section__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
              <div className="modal__close--wrapper">
                <button
                  className="close__modal"
                  onClick={() => toggleModal("toggleAbout")}
                >
                  &times;
                </button>
              </div>
            </div>

            <div className="modal modal__contact" id="toggleContact">
              <div className="contact__wrapper">
                <h3 className="section__title">Message Us!</h3>
                <p className="section__text">We'd love to hear from you.</p>
                <form className="contact__form">
                  <label htmlFor="name" className="form__label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form__input"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form__input"
                    required
                  />
                  <label htmlFor="message" className="form__label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form__input form__message"
                    rows="5"
                    required
                  ></textarea>
                  <button type="submit" className="contact__submit">
                    Send it
                  </button>
                </form>
              </div>
              <div className="modal__close--wrapper">
                <button
                  className="close__modal"
                  onClick={() => toggleModal("toggleContact")}
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* SEARCH SECTION */}
      <section id="searchSection">
        <div className="search__container">
          <h2 className="section__title">
            What's your <span className="color--text">vibe</span>?
          </h2>
          <p className="section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <form className="search__bar">
            <input type="text" placeholder="Let's get started!" required />
            <button className="search__button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer__wrapper">
        <div className="footer__logo--wrapper">
          <img src="/assets/Logo Black.PNG" alt="Logo" className="logo__img" />
        </div>
        <ul className="footer__list">
          <li className="footer__link">Lorem</li>
          <li className="footer__link">Lorem, ipsum</li>
        </ul>
      </footer>

      {/* Render children */}
      {children}
    </div>
  );
};

export default Layout;
