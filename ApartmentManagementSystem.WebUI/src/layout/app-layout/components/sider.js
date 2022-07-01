import React, { useState } from "react";
import SiderMenu from "./sider-menu";

const Sider = ({ siderVisible }) => {
  return (
    <div
      className={`" layout-sider   ${
        siderVisible ? " w-1/5  " : "opacity-0 w-0 pointer-events-none"
      } "`}
    >
      <span className="text-gray-200 text-3xl">Apartment</span>
      <span className="text-gray-100 text-sm mb-14"> Management System</span>
      <SiderMenu />
    </div>
  );
};

export default Sider;
