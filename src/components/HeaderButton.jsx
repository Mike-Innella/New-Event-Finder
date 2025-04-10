// src/components/ui/HeaderButton.jsx
import React from "react";

const HeaderButton = ({ id, label, icon, onClick }) => (
  <div className="item__wrapper">
    <button className="item__button" onClick={() => onClick(id)}>
      <i className={`fa-solid ${icon} item__icon`}></i>
    </button>
    <li className="nav__item">{label}</li>
  </div>
);

export default HeaderButton;
