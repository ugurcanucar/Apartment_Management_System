import React, { useEffect, useState } from "react";
import "./styles.scss";
const CustomInput = ({
  label = "",
  icon = "fa fa-user",
  placeholder = "",
  onChange,
  value,
  propertyName,
  defaultValue,
  disabled = false,
  type = "text",
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState("password");
  const [inpValue, setInpValue] = useState("");
  const changeHandler = (val) => {
    onChange({ ...value, [propertyName]: val });
    setInpValue(val);
  };
  useEffect(() => {
    if (defaultValue != undefined) {
      setInpValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="w-full">
      <label className="custom-input-label">{label}</label>
      <div className="relative shadow-sm w-full">
        <i className={`${icon} absolute bottom-1/4 left-2`} />
        <input
          disabled={disabled}
          className="custom-input"
          value={inpValue}
          type={type === "password" ? isPasswordHidden : type}
          onChange={(e) => changeHandler(e.target.value)}
          placeholder={placeholder}
        />
        {type === "password" && (
          <i
            onClick={() =>
              setIsPasswordHidden(
                isPasswordHidden === "password" ? "text" : "password"
              )
            }
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
