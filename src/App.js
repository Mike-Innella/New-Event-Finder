// src/App.js
import React, { useState } from "react";
import Layout from "../src/components/layout";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    modal__about: false,
    modal__contact: false,
  });
  const [isContrast, setIsContrast] = useState(false);

  const toggleModal = (modalClass) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [modalClass]: !prevState[modalClass],
    }));
  };

  const toggleContrast = () => {
    setIsContrast((prevContrast) => !prevContrast);
  };

  return (
    <div className={isContrast ? "dark-theme" : "light-theme"}>
      <Layout
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        toggleContrast={toggleContrast}
      />
    </div>
  );
};

export default App;
