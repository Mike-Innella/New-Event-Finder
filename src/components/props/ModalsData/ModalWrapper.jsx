import React from "react";
import ModalContent from "./ModalContent";

const ModalWrapper = ({
  isModalOpen,
  toggleModal,
  modalClass,
  onFormSubmit,
}) => {
  // Prevent modal closing when clicking on the background or inside modal
  const handleBackgroundClick = () => {
    // Only close the modal if explicitly desired (for example, clicking on a close button)
    // Do nothing on background click
  };

  return (
    <div
      className={`modal-background ${isModalOpen ? "active" : ""}`}
      onClick={handleBackgroundClick} // Prevent modal from closing when background is clicked
    >
      <div
        className={`modal-content ${
          modalClass === "modal__about" ? "modal-left" : "modal-right"
        } ${isModalOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <ModalContent
          modalClass={modalClass}
          onFormSubmit={onFormSubmit} // Pass form submission handler here
        />
      </div>
    </div>
  );
};

export default ModalWrapper;
