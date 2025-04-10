// src/components/ui/Header.jsx
import React from "react";
import Modal from "./Modal";

const Header = ({ toggleModal, toggleContrast }) => {
  return (
    <header className="header__wrapper">
      <div className="logo__wrapper" id="navItemWrap">
        <img src="/assets/Logo Black.PNG" alt="Logo" className="logo__img" />
      </div>

      <nav className="nav__bar" id="navItemWrap">
        <ul className="nav__list">
          <div className="item__wrapper">
            <button
              className="item__button"
              onClick={() => toggleModal("toggleAbout")}
            >
              <i className="fa-solid fa-question item__icon"></i>
            </button>
            <li className="nav__item">About</li>
          </div>
          <div className="item__wrapper">
            <button
              className="item__button"
              onClick={() => toggleModal("toggleContact")}
            >
              <i className="fa-solid fa-envelope item__icon"></i>
            </button>
            <li className="nav__item">Contact Us</li>
          </div>
          <div className="item__wrapper">
            <button className="contrast__toggle" onClick={toggleContrast}>
              <i className="fa-solid fa-circle-half-stroke item__icon"></i>
            </button>
          </div>
        </ul>
      </nav>

      {/* Modal components will be toggled based on modal ID */}
      <Modal modalId="toggleAbout" toggleModal={toggleModal} />
      <Modal modalId="toggleContact" toggleModal={toggleModal} />
    </header>
  );
};

export default Header;
