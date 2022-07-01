import React from "react";
import "./styles.scss";
const CustomButton = ({ className, onClick, label }) => {
  return (
    <button className={`special-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
