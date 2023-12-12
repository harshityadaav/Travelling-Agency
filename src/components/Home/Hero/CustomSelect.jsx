import React from "react";
import "../../../Style/Home/Hero/CustomSelect.css"
import { useState } from "react";
import dropIcon from "../../../assets/Images/Home/Hero/drop.svg"

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const options = ['January', 'February', 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  return (
    <div className="custom-dropdown">
      <div
        className="selected-option"
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        {selectedOption || <div>January</div>}
        <img className="dropIcon" src={dropIcon} alt="" />
      </div>
      {dropdownVisible && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option}
              className="optionCss"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect