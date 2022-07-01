import React from "react";
import { connect } from "react-redux";
import AppViews from "views/app-views";
import { signOut } from "redux/actions/Auth";

const Content = ({ siderVisible, setSiderVisible, signOut }) => {
  return (
    <div className="layout-content-wrapper">
      <div className="layout-header">
        <div
          className="hover:cursor-pointer"
          onClick={() => setSiderVisible(!siderVisible)}
        >
          <i className="fa fa-bars fa-lg" />
        </div>
        <div>
          <span className="mr-5">Hoşgeldin, Uğurcan!</span>
          <i
            onClick={() => signOut()}
            className="  fa fa-power-off fa-lg  sign-out-button"
          />
        </div>
      </div>
      <div className="content">
        <AppViews />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  signOut,
};
export default connect(null, mapDispatchToProps)(Content);
