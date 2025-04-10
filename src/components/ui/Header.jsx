// src/components/ui/Header.jsx
import React from "react";
import HeaderButton from "../props jsx/HeaderButton";
import { headerProps } from "../props js/HeaderProps";

const Header = ({ toggleModal, toggleContrast }) => {
  return (
    <header className="header__wrapper">
      <div className="logo__wrapper" id="navItemWrap">
        <img src="/assets/Logo Black.PNG" alt="Logo" className="logo__img" />
      </div>

      <nav className="nav__bar" id="navItemWrap">
        <ul className="nav__list">
          {headerProps.map((buttonProps, index) => (
            <HeaderButton
              key={index}
              {...buttonProps}
              toggleModal={toggleModal}
            />
          ))}
          <div className="item__wrapper">
            <button className="contrast__toggle" onClick={toggleContrast}>
              <i className="fa-solid fa-circle-half-stroke item__icon"></i>
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
