import React, { useEffect, useState } from "react";
import "./styles.scss";
const CustomCheckbox = ({
  label = "",
  placeholder = "",
  onChange,
  value,
  propertyName,
  defaultValue,
}) => {
  const [checked, setChecked] = useState(false);
  const changeHandler = (val) => {
    onChange({ ...value, [propertyName]: val });
    setChecked(val);
  };
  useEffect(() => {
    if (defaultValue != undefined) {
      setChecked(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="w-full flex justify-start items-center">
      <input
        className="w-10 custom-checkbox"
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={(e) => changeHandler(e.target.checked)}
        placeholder={placeholder}
      />
      <label className="custom-checkbox-label">{label}</label>
    </div>
  );
};

export default CustomCheckbox;
