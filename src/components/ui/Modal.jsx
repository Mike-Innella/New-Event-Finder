import React from "react";

const Modal = ({ modalId, toggleModal, title, content, isModalOpen }) => {
  // Log modal render attempt
  console.log(`Rendering Modal: ${modalId}, isModalOpen: ${isModalOpen}`);

  return (
    <>
      {/* Background overlay */}
      <div className={`modal__background ${isModalOpen ? "show" : ""}`} />

      {/* Modal content */}
      <div
        className={`modal ${modalId} ${isModalOpen ? "show" : ""}`}
        id={modalId}
      >
        <div className="modal__wrapper">
          <button
            className="close__modal"
            onClick={() => {
              console.log(`Closing Modal: ${modalId}`);
              toggleModal(modalId);
            }}
          >
            &times;
          </button>
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
