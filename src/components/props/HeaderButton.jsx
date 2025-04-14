import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEnvelope,
  faAddressCard,
  faCircleHalfStroke, // ✅ Add import
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  question: faCircleQuestion,
  envelope: faEnvelope,
  "address-card": faAddressCard,
  "circle-half-stroke": faCircleHalfStroke, // ✅ Add to iconMap
};

const HeaderButton = ({ icon, label, onClick }) => (
  <li className="item__wrapper">
    <button className="item__button" onClick={onClick}>
      <FontAwesomeIcon icon={iconMap[icon]} className="item__icon" />
    </button>
    <span className="nav__item">{label}</span>
  </li>
);

export default HeaderButton;
