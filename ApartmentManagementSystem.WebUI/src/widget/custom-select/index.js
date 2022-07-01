import React, { useState } from "react";
import "./styles.scss";
const CustomSelect = ({
  label = "",
  icon = "fa fa-user",
  placeholder = "",
  onChange,
  value,
  propertyName,
  disabled = false,
  dataSet = [],
  dataLabelProperty = "name",
  dataValueProperty = "id",
}) => {
  const changeHandler = (val) => {
    onChange({ ...value, [propertyName]: val });
  };

  return (
    <div className="w-full">
      <label className="custom-select-label">{label}</label>
      <div className="relative shadow-sm w-full">
        <i className={`${icon} absolute bottom-1/4 left-2`} />
        <select
          className="custom-select"
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e) => changeHandler(e.target.value)}
        >
          <option value={0}>Please choose a {label.toLocaleLowerCase()}</option>
          {dataSet.map((x) => {
            return (
              <option key={x[dataValueProperty]} value={x[dataValueProperty]}>
                {x[dataLabelProperty]}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
