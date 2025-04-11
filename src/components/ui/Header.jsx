// src/components/ui/Header.jsx
import React from "react";
import HeaderButton from "../props/HeaderButton";

const Header = ({ toggleModal, toggleContrast }) => {
  const headerProps = [
    {
      icon: "fa-question",
      label: "About",
      onClick: () => toggleModal("toggleAbout"),
    },
    {
      icon: "fa-envelope",
      label: "Contact Us",
      onClick: () => toggleModal("toggleContact"),
    },
  ];

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
              icon={buttonProps.icon}
              label={buttonProps.label}
              onClick={buttonProps.onClick}
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
