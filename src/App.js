// src/App.js
import React, { useState } from "react";
import Layout from "../src/components/layout";

const App = () => {
  // Manage state for modal and contrast
  const [isModalOpen, setIsModalOpen] = useState({
    toggleAbout: false,
    toggleContact: false,
  });
  const [isContrast, setIsContrast] = useState(false);

  const toggleModal = (modalName) => {
    console.log(`Toggling modal: ${modalName}`);
    setIsModalOpen((prevState) => {
      const newState = {
        ...prevState,
        [modalName]: !prevState[modalName],
      };
      console.log("Modal state after toggle:", newState);
      return newState;
    });
  };

  const toggleContrast = () => {
    console.log("Toggling contrast");
    setIsContrast((prevContrast) => {
      const newContrast = !prevContrast;
      console.log("Contrast state after toggle:", newContrast);
      return newContrast;
    });
  };

  console.log("Current modal state:", isModalOpen);
  console.log("Current contrast state:", isContrast);

  return (
    <div className={isContrast ? "dark-theme" : "light-theme"}>
      {/* Pass state and functions as props to Layout */}
      <Layout
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        toggleContrast={toggleContrast}
      >
        {/* You can place other children components here */}
      </Layout>
    </div>
  );
};

export default App;
