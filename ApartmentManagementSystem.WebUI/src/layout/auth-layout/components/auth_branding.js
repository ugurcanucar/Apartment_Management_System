import React from "react";

const AuthBranding = () => {
  return (
    <div className="auth-branding">
      <img
        src={
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fres.freestockphotos.biz%2Fpictures%2F14%2F14938-illustration-of-a-yellow-house-pv.png&f=1&nofb=1"
        }
        className="brand-logo"
      />
      <span className="branding-text">Apartment Management System</span>
    </div>
  );
};

export default AuthBranding;
