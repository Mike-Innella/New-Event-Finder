import React from "react";

const ModalOverlays = ({ isLoading, isSuccess, onSuccessClose }) => {
  return (
    <div className="modal__overlays">
      {isLoading && (
        <div className="modal__overlay overlay--loading">
          <div className="loader-container">
            <div className="loader-dot"></div>
          </div>
        </div>
      )}

      {isSuccess && (
        <div className="modal__overlay overlay--success">
          <p className="section__text">
            Thank you for your message, we will respond soon!
          </p>
          <button className="contact__submit" onClick={onSuccessClose}>
            Got it
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalOverlays;
