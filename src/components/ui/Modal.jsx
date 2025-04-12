import React, { useEffect, useRef } from "react";
import ModalContent from "../props/ModalContent";

const Modal = ({ modalClass, toggleModal, title, content, isModalOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        toggleModal(modalClass);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Set focus to the modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, modalClass, toggleModal]);

  const handleModalClick = (e) => {
    // Prevent closing when clicking inside the modal content area
    if (e.target === modalRef.current) {
      toggleModal(modalClass);
    }
  };

  return (
    <>
      {/* Background overlay with click event to open the modal */}
      <div
        className={`modal__background ${isModalOpen ? "show" : ""}`}
        onClick={() => toggleModal(modalClass)}
        aria-hidden={!isModalOpen}
      />

      {/* Modal content */}
      <div
        className={`modal ${modalClass} ${isModalOpen ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        ref={modalRef}
        tabIndex="-1"
        onClick={handleModalClick} // Close modal when background is clicked
      >
        <div className="modal__wrapper">
          <button
            className="close__modal"
            onClick={() => toggleModal(modalClass)}
            aria-label={`Close ${modalClass} modal`}
          >
            &times;
          </button>

          {/* Modal Content */}
          <ModalContent title={title} content={content} />
        </div>
      </div>
    </>
  );
};

export default Modal;
