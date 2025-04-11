// src/components/ui/Modal.jsx
import React from "react";

const Modal = ({ modalId, toggleModal, title, content, isModalOpen }) => {
  if (!isModalOpen) return null; // Don't render the modal if it's not open

  return (
    <div className={`modal ${modalId}`} id={modalId}>
      <div className="modal__wrapper">
        <button className="close__modal" onClick={() => toggleModal(modalId)}>
          &times;
        </button>
        <div className="modal__content">
          <h3 className="section__title">{title}</h3>
          <p className="section__text">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
