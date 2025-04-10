// src/components/ui/SectionTitle.jsx
import React from "react";

const SectionTitle = ({ text, highlight }) => (
  <h2 className="section__title">
    {text} <span className="color--text">{highlight}</span>
  </h2>
);

export default SectionTitle;
