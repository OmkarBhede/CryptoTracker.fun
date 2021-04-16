import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <form>
        <input
          className="coin-input"
          type="search"
          placeholder="search coins"
          onChange={searchChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
