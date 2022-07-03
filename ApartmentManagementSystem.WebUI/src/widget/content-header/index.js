import React from "react";
import "./styles.scss";
const ContentHeader = ({ contentTitle, icon, actionButton }) => {
  return (
    <div className="content-header-wrapper">
      <div className="content-header">
        <i className={`content-icon ${icon}`} />
        <span className="content-title">{contentTitle}</span>
      </div>
      {actionButton && <div className="flex justify-end">{actionButton}</div>}
    </div>
  );
};

export default ContentHeader;
