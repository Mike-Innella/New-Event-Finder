//src/App.js
import React, { useState } from "react";
import Layout from "../src/components/layout";
import Modal from "../src/components/ui/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    toggleAbout: false,
    toggleContact: false,
  });
  const [isContrast, setIsContrast] = useState(false);

  const toggleModal = (modalName) => {
    setIsModalOpen((prevState) => {
      const newState = {
        ...prevState,
        [modalName]: !prevState[modalName],
      };
      return newState;
    });
  };

  const toggleContrast = () => {
    setIsContrast((prevContrast) => {
      const newContrast = !prevContrast;
      return newContrast;
    });
  };

  return (
    <div className={isContrast ? "dark-theme" : "light-theme"}>
      <Layout
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        toggleContrast={toggleContrast}
      >
        {["about", "contact"].map((modalType) => (
          <Modal
            key={modalType}
            modalClass={`modal__${modalType}`}
            toggleModal={toggleModal}
            title={modalType.charAt(0).toUpperCase() + modalType.slice(1)}
            content={`This is the ${modalType.charAt(0).toUpperCase() + modalType.slice(1)} modal content.`}
            isModalOpen={isModalOpen[`toggle${modalType.charAt(0).toUpperCase() + modalType.slice(1)}`]}
          />
        ))}
      </Layout>
    </div>
  );
};

export default App;
