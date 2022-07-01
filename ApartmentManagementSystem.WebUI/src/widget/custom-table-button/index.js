import React from "react";
import "./styles.scss";
const CustomTableButton = ({
  onClick,
  isEditButton = true,
  label = isEditButton ? "Edit" : "Delete",
}) => {
  return (
    <button
      className={`${
        isEditButton ? "edit-button" : "delete-button"
      } table-button`}
      onClick={onClick}
    >
      <i className={`fa ${isEditButton ? " fa-pen " : "fa-trash"} mr-2 "`} />{" "}
      {label}
    </button>
  );
};

export default CustomTableButton;
