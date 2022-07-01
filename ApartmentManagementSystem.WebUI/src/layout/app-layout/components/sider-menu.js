import React from "react";
import { Link } from "react-router-dom";

const SiderMenu = () => {
  return (
    <ul className="sider-menu-general">
      <Link to="/">
        <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
          <i className="fa fa-grip mr-6"></i>
          <span>Dashboard</span>
        </li>
      </Link>
      <Link to="apartment-management">
        <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
          <i className="fa fa-building mr-6"></i>
          <span>Apartment Management</span>
        </li>
      </Link>
      <Link to="apartment-management">
        <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
          <i className="fa fa-building mr-6"></i>
          <span>Apartment Management</span>
        </li>
      </Link>
      <Link to="apartment-management">
        <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
          <i className="fa fa-building mr-6"></i>
          <span>Apartment Management</span>
        </li>
      </Link>
      <Link to="apartment-management">
        <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
          <i className="fa fa-building mr-6"></i>
          <span>Apartment Management</span>
        </li>
      </Link>
      <Link to="apartment-management">
        <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
          <i className="fa fa-building mr-6"></i>
          <span>Apartment Management</span>
        </li>
      </Link>
    </ul>
  );
};

export default SiderMenu;
