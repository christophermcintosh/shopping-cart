import React from 'react';

const Select = ({ value, handleChange, arr, label }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={handleChange}>
        {arr.map(property => {
          return (
            <option key={property} value={property}>
              {property}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
