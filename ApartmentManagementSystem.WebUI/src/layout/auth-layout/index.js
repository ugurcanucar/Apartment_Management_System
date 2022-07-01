import React, { useState } from "react";
import AuthBranding from "./components/auth_branding";
import AuthForm from "./components/auth-form";
import "./styles.scss";
import { connect } from "react-redux";
const AuthLayout = () => {
  const [authObj, setAuthObj] = useState({});
  return (
    <div className="auth-general">
      <div className="auth-wrapper">
        <AuthBranding />
        <div className="auth-form-general">
          <span className="auth-title">Log In to Management System</span>

          <span className="auth-subtitle">
            Enter your email and password below
          </span>

          <AuthForm {...{ setAuthObj, authObj }} />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
