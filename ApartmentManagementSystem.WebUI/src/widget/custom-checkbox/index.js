import React, { useState } from "react";
import "./styles.scss";
const CustomCheckbox = ({
  label = "",
  placeholder = "",
  onChange,
  value,
  propertyName,
}) => {
  const changeHandler = (val) => {
    onChange({ ...value, [propertyName]: val });
  };
  return (
    <div className="w-full flex justify-start items-center">
      <input
        className="w-10 custom-checkbox"
        type="checkbox"
        onChange={(e) => changeHandler(e.target.checked)}
        placeholder={placeholder}
      />
      <label className="custom-checkbox-label">{label}</label>
    </div>
  );
};

export default CustomCheckbox;
