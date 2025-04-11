// src/components/ui/SectionTitle.jsx
import React from "react";

const SectionTitle = ({ text, highlight }) => {
  return (
    <h1>
      {text} <span className="highlight">{highlight}</span>
    </h1>
  );
};

export default SectionTitle;
