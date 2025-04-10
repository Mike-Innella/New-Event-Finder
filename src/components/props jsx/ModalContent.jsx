// src/components/ui/ModalContent.jsx
import React from "react";

const ModalContent = ({ title, text }) => {
  return (
    <div className="modal__content">
      <h3 className="section__title">{title}</h3>
      <p className="section__text">{text}</p>
    </div>
  );
};

export default ModalContent;
