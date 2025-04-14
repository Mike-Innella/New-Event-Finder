// src/components/ui/Header.jsx
import React from "react";
import HeaderButton from "../props/HeaderButton";
import Logo from "../props/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleModal, toggleContrast }) => {
  const headerProps = [
    {
      icon: "question", // matches key in iconMap
      label: "About",
      onClick: () => toggleModal("modal__about"),
    },
    {
      icon: "envelope", // matches key in iconMap
      label: "Contact Us",
      onClick: () => toggleModal("modal__contact"),
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
          <li className="item__wrapper">
            <button className="contrast__toggle" onClick={toggleContrast}>
              <FontAwesomeIcon
                icon={faCircleHalfStroke}
                className="item__icon"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
