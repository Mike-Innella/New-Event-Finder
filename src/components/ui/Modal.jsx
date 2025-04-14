import React, { useEffect, useRef, useState } from "react";
import ModalContent from "../props/ModalsData/ModalContent";

const Modal = ({ modalClass, toggleModal, isModalOpen, onFormSubmit }) => {
  const modalRef = useRef(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        toggleModal(modalClass);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, modalClass, toggleModal]);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal__background") && !isFormSubmitted) {
      toggleModal(modalClass); // Only close if form is not submitted
    }
  };

  const handleFormSubmit = () => {
    if (onFormSubmit) {
      onFormSubmit(); // Form submission logic
    }
    setIsFormSubmitted(true); // Set form submission state
  };

  return (
    <>
      {/* Background overlay */}
      <div className="modal__wrapper">
        <div
          className={`modal__background ${isModalOpen ? "show" : ""}`}
          onClick={handleBackgroundClick}
          aria-hidden={!isModalOpen}
        />

        {/* Modal container */}
        <div className={`modals ${isModalOpen ? "show" : ""}`}>
          {/* Modal */}
          <div
            className={`modal ${modalClass} ${isModalOpen ? "show" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-content"
            ref={modalRef}
            tabIndex="-1"
          >
            <button
              className="close__modal"
              onClick={() => toggleModal(modalClass)}
              aria-label={`Close ${modalClass} modal`}
            >
              &times;
            </button>

            {/* Modal Content */}
            <ModalContent
              modalClass={modalClass}
              toggleModal={toggleModal}
              isModalOpen={isModalOpen}
              onFormSubmit={handleFormSubmit} // Pass down the form submission handler
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
