import React from 'react';

import "./custom-dropdown.styles.css";

const CustomDropdown = ({ labelName, choices }) => {
    return (
        <div className="customDropdown">
          <label>{labelName}</label>
          <select>
            <option></option>
            {choices && choices.map((choice, index) => {
              return <option key={index} value={choice}>{choice}</option>
            })}
          </select>
        </div>
    )
}

export default CustomDropdown
