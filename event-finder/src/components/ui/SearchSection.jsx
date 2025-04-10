// src/components/ui/SearchSection.jsx
import React from "react";

const SearchSection = () => {
  return (
    <section id="searchSection">
      <div className="search__container">
        <h2 className="section__title">
          What's your <span className="color--text">vibe</span>?
        </h2>
        <form className="search__bar">
          <input type="text" placeholder="Let's get started!" required />
          <button className="search__button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
