// src/components/layout.jsx
import React from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Modal from "./ui/Modal";
import SearchSection from "./ui/SearchSection";

const Layout = ({ toggleModal, isModalOpen, toggleContrast }) => {
  return (
    <div className="container">
      <Header toggleModal={toggleModal} toggleContrast={toggleContrast} />
      <SearchSection />
      <Footer />

      <Modal
        modalClass="modal__about"
        toggleModal={toggleModal}
        isModalOpen={isModalOpen["modal__about"]}
      />
      <Modal
        modalClass="modal__contact"
        toggleModal={toggleModal}
        isModalOpen={isModalOpen["modal__contact"]}
      />
    </div>
  );
};

export default Layout;
