// src/components/ui/SearchSection.jsx
import React from "react";
import SectionTitle from "../props jsx/SectionTitle";
import SearchForm from "../props jsx/SearchForm";
import searchProps from "../props js/SearchProps";

const SearchSection = () => {
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
