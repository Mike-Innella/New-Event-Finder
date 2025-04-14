import React, { useState } from "react";
import ModalOverlays from "./ModalOverlays"; // Adjust path as needed

const ModalContent = ({ modalClass, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOverlay, setIsSuccessOverlay] = useState(false);
  const [isLoadingOverlay, setIsLoadingOverlay] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsLoadingOverlay(true); // Show loading overlay
    setIsSuccessOverlay(false); // Ensure success overlay is hidden

    try {
      if (typeof onFormSubmit !== "function") {
        throw new Error("onFormSubmit is not defined or not a function.");
      }

      await onFormSubmit(formData);

      // Add a small delay before switching to the success overlay
      setTimeout(() => {
        setIsLoadingOverlay(false); // Hide loading overlay
        setIsSuccessOverlay(true); // Show success overlay
      }, 1000); // 1-second delay
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  const handleSuccessClose = () => {
    setIsSuccessOverlay(false);
    setFormData({ name: "", email: "", message: "" }); // Optional: reset form
  };

  return (
    <>
      {modalClass === "modal__contact" && (
        <div className="modal__section contact__wrapper">
          <h3 className="section__title">Message Us!</h3>
          <div className="section__text">
            <p>We'd love to hear from you.</p>
            <form className="contact__form" onSubmit={handleFormSubmit}>
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form__input"
                required
                value={formData.name}
                onChange={handleInputChange}
              />

              <label htmlFor="email" className="form__label">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                className="form__input"
                required
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="message" className="form__label">
                Message
              </label>
              <textarea
                name="message"
                className="form__input form__message"
                rows="5"
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>

              <button
                type="submit"
                className="contact__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send it"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Pass overlay states and close handler to the overlay component */}
      <ModalOverlays
        isLoading={isLoadingOverlay}
        isSuccess={isSuccessOverlay}
        onSuccessClose={handleSuccessClose}
      />
    </>
  );
};

export default ModalContent;
