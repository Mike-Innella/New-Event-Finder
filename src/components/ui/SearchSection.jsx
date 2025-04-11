// src/components/ui/SearchSection.jsx
import React from "react";
import SectionTitle from "../props/SectionTitle";
import SearchForm from "../props/SearchForm";

const SearchSection = () => {
  const searchProps = {
    title: {
      text: "What's your",
      highlight: "vibe",
    },
  };

  return (
    <section id="searchSection">
      <div className="search__container">
        <SectionTitle {...searchProps.title} />
        <SearchForm />
      </div>
    </section>
  );
};

export default SearchSection;
