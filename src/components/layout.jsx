// src/components/Layout.jsx
import React from "react";
import Header from "./ui/Header";
import SearchSection from "./ui/SearchSection";
import Footer from "./ui/Footer";

const Layout = ({ children, toggleModal, toggleContrast }) => (
  <div className="container">
    <Header toggleModal={toggleModal} toggleContrast={toggleContrast} />
    <main>
      <SearchSection />
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
