// src/components/HeaderButton.jsx
import React from 'react';

const HeaderButton = ({ icon, label, onClick }) => {
  return (
    <div className="item__wrapper">
      <button className="item__button" onClick={onClick}>
        <i className={`fa-solid ${icon} item__icon`}></i>
      </button>
      <li className="nav__item">{label}</li>
    </div>
  );
};

export default HeaderButton;
