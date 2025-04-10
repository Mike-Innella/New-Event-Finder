// src/components/Layout.jsx
import React from "react";
import Header from "./ui/Header";
import SearchSection from "./ui/SearchSection";
import Footer from "./ui/Footer";
import Modal from "./ui/Modal";
import { modalProps } from "./props js/ModalProps"; // Import modal props

const Layout = ({ children, toggleModal, toggleContrast }) => {
  return (
    <div className="container">
      <Header toggleModal={toggleModal} toggleContrast={toggleContrast} />
      <SearchSection />
      <Footer />
      {modalProps.map((modal) => (
        <Modal key={modal.modalId} {...modal} toggleModal={toggleModal} />
      ))}
      {children}
    </div>
  );
};

export default Layout;
