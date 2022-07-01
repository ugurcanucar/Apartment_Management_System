import { AUTH_PREFIX_PATH } from "configs/AppConfig";
import AppLayout from "layout/app-layout";
import AuthLayout from "layout/auth-layout";
import React from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

function RouteInterceptor({ element, isAuthenticated, ...rest }) {
  return isAuthenticated ? element : <Navigate to={AUTH_PREFIX_PATH} replace />;
}

export const Views = (props) => {
  const { token } = props;
  return (
    <>
      <Routes>
        <Route path={AUTH_PREFIX_PATH} element={<AuthLayout />} />
        <Route
          path="/*"
          element={
            <RouteInterceptor isAuthenticated={token} element={<AppLayout />} />
          }
        ></Route>
      </Routes>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { token } = auth;
  return { token };
};

export default connect(mapStateToProps)(Views);
