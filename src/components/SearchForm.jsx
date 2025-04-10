// src/components/ui/SearchForm.jsx
import React from "react";

const SearchForm = () => {
  return (
    <form className="search__bar">
      <input type="text" placeholder="Let's get started!" required />
      <button className="search__button">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchForm;
