import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

function Search({ text, onInputChange, onButtonClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(e); // Llama a la función pasada desde UsersData
  };

  const handleButtonClick = () => {
    onButtonClick(); // Llama a la función pasada desde UsersData
  };

  return (
    <div className="search input-group mb-3">
      <input
        type="text"
        className="form-control searching"
        placeholder={text}
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="searchBtn btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleButtonClick}
      >
        <FontAwesomeIcon className="iconGlass" icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}


export default Search;