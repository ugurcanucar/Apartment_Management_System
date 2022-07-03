import React, { useEffect, useState } from "react";
import "./styles.scss";
const CustomDatePicker = ({
  label = "",
  placeholder = "",
  onChange,
  defaultValue,
  fullWidth = false,
}) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 7));
  const changeHandler = (val) => {
    onChange(val);
    setDate(val);
  };
  useEffect(() => {
    if (defaultValue != undefined) {
      setDate(defaultValue.slice(0, 7));
    }
  }, [defaultValue]);

  return (
    <div className="w-full">
      <label className="custom-input-label">{label}</label>
      <div className={`relative shadow-sm ${fullWidth ? "w-full" : "w-max"}  `}>
        <input
          className={`custom-date-input ${fullWidth && "w-full"}`}
          value={date}
          type={"month"}
          onChange={(e) => changeHandler(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
