// src/components/ui/SearchSection.jsx
import React from "react";
import SectionTitle from "./SectionTitle";
import SearchForm from "./SearchForm";
import searchProps from "../props/SearchProps";

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
