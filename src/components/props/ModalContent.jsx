import React from "react";

const ModalContent = ({
  modalClass,
  toggleModal,
  isModalOpen,
  onFormSubmit,
}) => {
  const modalContent = {
    about: {
      title: "About Us",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos sit eligendi eius, sed aliquam minima corrupti hic accusamus commodi.",
    },
    contact: {
      title: "Message Us!",
      content: (
        <>
          <p>We'd love to hear from you.</p>
          <form
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault();
              onFormSubmit();
            }}
          >
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input type="text" name="name" className="form__input" required />

            <label htmlFor="email" className="form__label">
              E-mail
            </label>
            <input type="email" name="email" className="form__input" required />

            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              name="message"
              className="form__input form__message"
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="contact__submit"
              id="contactSubmit"
            >
              Send it
            </button>
          </form>
        </>
      ),
    },
  };

  return (
    <>
      {modalClass === "modal__about" ? (
        <div className="about__wrapper">
          <h3 className="section__title">{modalContent.about.title}</h3>
          <p className="section__text">{modalContent.about.content}</p>
        </div>
      ) : modalClass === "modal__contact" ? (
        <div className="contact__wrapper">
          <h3 className="section__title">{modalContent.contact.title}</h3>
          <div className="section__text">{modalContent.contact.content}</div>
        </div>
      ) : null}
    </>
  );
};

export default ModalContent;
