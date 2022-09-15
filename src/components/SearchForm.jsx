import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchValue, setSearchValue } = useGlobalContext();
  return (
    <form className="search-form">
      <div className="form-control">
        <label htmlFor="name">search your favorite cocktail</label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchForm;
