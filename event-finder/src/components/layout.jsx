// src/components/Layout.jsx
import React from "react";
import Header from "./ui/Header";
import SearchSection from "./ui/SearchSection";
import Footer from "./ui/Footer";

const Layout = ({ children, toggleModal, toggleContrast }) => {
  return (
    <div className="container">
      <Header toggleModal={toggleModal} toggleContrast={toggleContrast} />
      <SearchSection />
      <Footer />
      {children}
    </div>
  );
};

export default Layout;
