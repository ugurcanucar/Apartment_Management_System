import React, { useEffect, useState } from "react";
import "./styles.scss";
const CustomSelect = ({
  label = "",
  icon = "fa fa-user",
  placeholder = "",
  onChange,
  value,
  propertyName,
  disabled = false,
  defaultValue,
  dataSet = [],
  dataLabelProperty = "name",
  dataValueProperty = "id",
}) => {
  const [selectValue, setSelectValue] = useState(0);

  const changeHandler = (val) => {
    onChange({ ...value, [propertyName]: parseInt(val) });
    setSelectValue(val);
  };
  useEffect(() => {
    if (defaultValue != undefined) {
      setSelectValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="w-full">
      <label className="custom-select-label">{label}</label>
      <div className="relative shadow-sm w-full">
        <i className={`${icon} absolute bottom-1/4 left-2`} />
        <select
          className="custom-select"
          disabled={disabled}
          // value={defaultValue ? defaultValue : value[propertyName]}
          value={selectValue}
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
