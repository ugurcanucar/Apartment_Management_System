import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SiderMenu = ({ userInformations }) => {
  return (
    <ul className="sider-menu-general">
      <Link to="/">
        <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
          <i className="fa fa-grip mr-6"></i>
          <span>Dashboard</span>
        </li>
      </Link>
      {userInformations.accountTypeId === 1 ? (
        <>
          <Link to="apartment-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa fa-building mr-6"></i>
              <span>Apartment Management</span>
            </li>
          </Link>
          <Link to="apartment-type-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa  fa-building-circle-arrow-right mr-4"></i>
              <span>Apartment Types</span>
            </li>
          </Link>
          <Link to="block-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa fa-house-flag mr-6"></i>
              <span>Block Management</span>
            </li>
          </Link>
          <Link to="user-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa fa-user mr-6"></i>
              <span>User Management</span>
            </li>
          </Link>
          <Link to="bill-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa fa-money-bill mr-6"></i>
              <span>Bill Management</span>
            </li>
          </Link>
          <Link to="bill-type-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa fa-money-bill mr-6"></i>
              <span>Bill Type Management</span>
            </li>
          </Link>
          <Link to="message-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa fa-envelope mr-6"></i>
              <span>Message Management</span>
            </li>
          </Link>
        </>
      ) : (
        <>
          <Link to="bill-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa fa-money-bill mr-6"></i>
              <span>Bill Management</span>
            </li>
          </Link>
          <Link to="message-management">
            <li className="w-full pl-10 py-3 mb-2 hover:bg-[#2e364d] transition-colors duration-300 cursor-pointer">
              <i className="fa fa-envelope mr-6"></i>
              <span>Message Service</span>
            </li>
          </Link>
        </>
      )}
    </ul>
  );
};
const mapStateToProps = ({ shared }) => {
  const { userInformations } = shared;
  return { userInformations };
};

export default connect(mapStateToProps)(SiderMenu);
