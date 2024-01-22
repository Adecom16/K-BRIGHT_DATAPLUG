// FormInput.js

import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const FormInput = ({ label, type, value, onChange, placeholder, options }) => {
  return (
    <FormGroup>
      <label>{label}:</label>
      {type === "select" ? (
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      )}
    </FormGroup>
  );
};

export default FormInput;
