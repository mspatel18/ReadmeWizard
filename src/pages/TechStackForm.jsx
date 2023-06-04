import React, { useState } from "react";

export default function TechStackForm({ handleSelectedOptions, techStackOptions }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (option) => {
    const updatedOptions = [...selectedOptions];
    if (updatedOptions.includes(option)) {
      const index = updatedOptions.indexOf(option);
      updatedOptions.splice(index, 1);
    } else {
      updatedOptions.push(option);
    }
    setSelectedOptions(updatedOptions);
    handleSelectedOptions(updatedOptions);
  };

  return (
    <div>
      <h3>Select Tech Stack:</h3>
      <div>
        {techStackOptions.map((option) => (
          <div key={option.name}>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.name)}
                onChange={() => handleChange(option.name)}
              />
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
