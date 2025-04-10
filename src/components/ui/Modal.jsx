// src/components/ui/Modal.jsx
import React from "react";
import modalProps from "../props/ModalProps";
import ModalContent from "./ModalContent";

const Modal = ({ modalId, toggleModal }) => {
  const { title, text } = modalProps[modalId] || {
    title: "Missing Title",
    text: "No content available for this modal.",
  };

  return (
    <div className={`modal ${modalId}`} id={modalId}>
      <div className="modal__wrapper">
        <button className="close__modal" onClick={() => toggleModal(modalId)}>
          &times;
        </button>
        <ModalContent title={title} text={text} />
      </div>
    </div>
  );
};

export default Modal;
