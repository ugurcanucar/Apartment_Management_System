import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { setTableRowData } from "redux/actions/Shared";
import utils from "utils";
import useOutsideClick from "utils/use_outside_alerter";
import "./styles.scss";
const Modal = ({ visible, closeModal, children, setTableRowData }) => {
  const ref = useRef(null);
  const closeModalHandler = () => {
    closeModal();
    setTableRowData({});
  };
  return (
    <div
      className={`modal ${visible ? "scale-100" : "scale-0"}`}
      onClick={(e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          closeModalHandler();
        }
      }}
    >
      <div className={`modal-content`} ref={ref}>
        <span onClick={closeModalHandler} className="close">
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setTableRowData,
};
export default connect(null, mapDispatchToProps)(Modal);
