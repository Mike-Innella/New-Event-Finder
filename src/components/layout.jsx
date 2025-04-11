//src/components/layout.jsx
import React from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Modal from "./ui/Modal";
import SearchSection from "./ui/SearchSection";

const Layout = ({ children, toggleModal, isModalOpen }) => {
  const modalProps = [
    {
      modalId: "toggleAbout",
      title: "About Modal",
      content: "This is the about modal content...",
    },
    {
      modalId: "toggleContact",
      title: "Contact Us Modal",
      content: "This is the contact modal content...",
    },
  ];

  return (
    <div className="container">
      <Header toggleModal={toggleModal} />
      <SearchSection />
      <Footer />
      {modalProps.map((modal) => (
        <Modal
          key={modal.modalId}
          modalId={modal.modalId}
          title={modal.title}
          content={modal.content}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen[modal.modalId]}
        />
      ))}
      {children}
    </div>
  );
};

export default Layout;
