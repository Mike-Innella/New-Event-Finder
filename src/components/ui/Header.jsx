// src/components/ui/Header.jsx
import React from "react";
import Modal from "./Modal";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import headerButtons from "../props/HeaderProps";

const Header = ({ toggleModal, toggleContrast }) => {
  return (
    <header className="header__wrapper">
      <Logo />

      <nav className="nav__bar" id="navItemWrap">
        <ul className="nav__list">
          {headerButtons.map(({ id, label, icon }) => (
            <HeaderButton
              key={id}
              id={id}
              label={label}
              icon={icon}
              onClick={toggleModal}
            />
          ))}

          <div className="item__wrapper">
            <button className="contrast__toggle" onClick={toggleContrast}>
              <i className="fa-solid fa-circle-half-stroke item__icon"></i>
            </button>
          </div>
        </ul>
      </nav>

      {headerButtons.map(({ id }) => (
        <Modal key={id} modalId={id} toggleModal={toggleModal} />
      ))}
    </header>
  );
};

export default Header;
