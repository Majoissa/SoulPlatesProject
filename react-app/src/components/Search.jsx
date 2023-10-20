import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

function Search(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (props) => {
    //in a future we can add functionalities to the button here
    console.log(inputValue);
  };

  return (
    <div className="search input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={props.text}
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
