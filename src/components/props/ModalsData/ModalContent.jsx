import React, { useState } from "react";

const ModalContent = ({ modalClass, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    // Ensure onFormSubmit is a function and returns a Promise
    if (typeof onFormSubmit === "function") {
      const maybePromise = onFormSubmit(formData);

      if (maybePromise && typeof maybePromise.then === "function") {
        maybePromise
          .then(() => {
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" }); // Clear form
          })
          .catch((error) => {
            console.error("Form submission error:", error);
          })
          .finally(() => setIsSubmitting(false));
      } else {
        console.error("onFormSubmit did not return a Promise.");
        setIsSubmitting(false);
      }
    } else {
      console.error("onFormSubmit is not defined or not a function.");
      setIsSubmitting(false);
    }
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

            {isSuccess && (
              <div className="success-message">Message sent successfully!</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContent;
