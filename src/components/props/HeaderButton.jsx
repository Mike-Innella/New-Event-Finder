// src/components/HeaderButton.jsx
import React from "react";

const HeaderButton = ({ icon, label, onClick }) => (
  <li className="item__wrapper">
    <button className="nav__item" onClick={onClick}>
      <i className={`fa-solid ${icon} item__icon`}></i>
      {label}
    </button>
  </li>
);

export default HeaderButton;
