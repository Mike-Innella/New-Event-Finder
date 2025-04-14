import React from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Modal from "./ui/Modal";
import SearchSection from "./ui/SearchSection";

const Layout = ({ toggleModal, isModalOpen, toggleContrast }) => {
  return (
    <div className="container">
      {/* Header with necessary props passed down */}
      <div className="row">
        <Header toggleModal={toggleModal} toggleContrast={toggleContrast} />
      </div>

      {/* Search Section */}
      <div className="row">
        <SearchSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Modals for About and Contact, with respective classes and states */}
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
