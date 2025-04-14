import React from "react";
import HeaderButton from "../props/HeaderButton";
import Logo from "../props/Logo";
import {
  faAddressCard,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleModal, toggleContrast }) => {
  const headerProps = [
    {
      icon: "question",
      label: "About",
      onClick: () => toggleModal("modal__about"),
    },
    {
      icon: "envelope",
      label: "Contact Us",
      onClick: () => toggleModal("modal__contact"),
    },
    {
      icon: "address-card",
      label: "Register",
      onClick: () => toggleModal("register__form"),
    },
    {
      icon: "circle-half-stroke",
      label: "Dark Mode",
      onClick: () => toggleContrast("dark__mode"),
    },
  ];

  return (
    <header className="header__wrapper">
      <div className="logo__wrapper" id="navItemWrap">
        <Logo />
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
