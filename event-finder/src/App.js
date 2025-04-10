// src/App.js
import React, { useState } from "react";
import Layout from "./components/Layout"; // Import the Layout component

const App = () => {
  // Manage state for modal and contrast
  const [isModalOpen, setIsModalOpen] = useState({
    about: false,
    contact: false,
  });
  const [isContrast, setIsContrast] = useState(false);

  const toggleModal = (modalName) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  const toggleContrast = () => {
    setIsContrast(!isContrast);
  };

  return (
    <div className={isContrast ? "dark-theme" : "light-theme"}>
      {/* Pass state and functions as props to Layout */}
      <Layout toggleModal={toggleModal} toggleContrast={toggleContrast}>
        {/* You can place other children components here */}
      </Layout>
    </div>
  );
};

export default App;
