// src/components/ui/Modal.jsx
import React from "react";

const Modal = ({ modalId, toggleModal }) => {
  return (
    <div className={`modal ${modalId}`} id={modalId}>
      <div className="modal__wrapper">
        <button className="close__modal" onClick={() => toggleModal(modalId)}>&times;</button>
        <div className="modal__content">
          <h3 className="section__title">Modal Title</h3>
          <p className="section__text">Modal content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
