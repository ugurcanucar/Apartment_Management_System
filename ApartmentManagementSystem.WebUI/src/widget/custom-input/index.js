import React, { useState } from "react";
import "./styles.scss";
const CustomInput = ({
  label = "",
  icon = "fa fa-user",
  placeholder = "",
  onChange,
  value,
  propertyName,
  isPassword = false,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const changeHandler = (val) => {
    onChange({ ...value, [propertyName]: val });
  };
  return (
    <div className="w-full">
      <label className="custom-input-label">{label}</label>
      <div className="relative shadow-sm w-full">
        <i className={`${icon} absolute bottom-1/4 left-2`} />
        <input
          className="custom-input"
          type={isPassword && isPasswordHidden ? "password" : "text"}
          onChange={(e) => changeHandler(e.target.value)}
          placeholder={placeholder}
        />
        {isPassword && (
          <i
            onClick={() => setIsPasswordHidden(!isPasswordHidden)}
            className={`fa ${
              isPasswordHidden ? "fa-eye-slash" : "fa-eye"
            }  absolute bottom-1/4 right-4 cursor-pointer`}
          />
        )}
      </div>
    </div>
  );
};

export default CustomInput;
