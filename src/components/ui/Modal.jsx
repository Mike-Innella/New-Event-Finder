import React from "react";

const Modal = ({ modalClass, toggleModal, title, content, isModalOpen }) => {
  return (
    <>
      {/* Background overlay with click event to close the modal */}
      <div
        className={`modal__background ${isModalOpen ? "show" : ""}`}
        onClick={() => toggleModal(modalClass)} // Close modal when background is clicked
        aria-hidden={!isModalOpen} // Accessibility improvement
      />

      {/* Modal content */}
      <div
        className={`modal ${modalClass} ${isModalOpen ? "show" : ""}`}
        aria-hidden={!isModalOpen} // Accessibility improvement
      >
        <div className="modal__wrapper">
          <button
            className="close__modal"
            onClick={() => toggleModal(modalClass)} // Close modal on button click
            aria-label={`Close ${modalClass} modal`} // Accessibility improvement
          >
            &times;
          </button>
          
          {/* Modal Content */}
          <div className="modal__content">
            <h3 className="section__title">{title}</h3>
            <p className="section__text">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
