import React from "react";
import "./styles.scss";
const CustomTableButton = ({
  onClick,
  isEditButton = true,
  label = isEditButton ? "Edit" : "Delete",
  icon,
}) => {
  return (
    <div className="relative">
      <button
        className={`${
          isEditButton ? "edit-button" : "delete-button"
        } table-button`}
        onClick={onClick}
      >
        <i
          className={`fa  ${
            icon ? icon : isEditButton ? " fa-pen " : "fa-trash"
          }   mr-2 "`}
        />{" "}
        {label}
      </button>
    </div>
  );
};

export default CustomTableButton;
