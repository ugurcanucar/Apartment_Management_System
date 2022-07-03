import React from "react";
import { connect } from "react-redux";
import AppViews from "views/app-views";
import { signOut } from "redux/actions/Auth";

const Content = ({
  siderVisible,
  setSiderVisible,
  signOut,
  userInformations,
}) => {
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
          <span className="mr-5">
            Welcome, <b> {userInformations.name}</b> !
          </span>
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
const mapStateToProps = ({ shared }) => {
  const { userInformations } = shared;
  return { userInformations };
};

const mapDispatchToProps = {
  signOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
