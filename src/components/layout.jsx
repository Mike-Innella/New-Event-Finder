// src/components/Layout.jsx
import React from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Modal from "./ui/Modal";
import { modalProps } from "./props/js/ModalProps"; // Import modal props

const Layout = ({ children, toggleModal, isModalOpen }) => {
  return (
    <div className="container">
      <Header toggleModal={toggleModal} />
      <Footer />
      {modalProps.map((modal) => (
        <Modal
          key={modal.modalId}
          modalId={modal.modalId}
          title={modal.title}
          content={modal.content}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen[modal.modalId]} // Pass the open state of each modal
        />
      ))}
      {children}
    </div>
  );
};

export default Layout;
