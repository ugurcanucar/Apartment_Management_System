import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, showLoading, hideAuthMessage } from "redux/actions/Auth";
import CustomButton from "widget/custom-button";
import AuthFormInput from "../../../../widget/custom-input";

const AuthForm = (props) => {
  const {
    authObj,
    setAuthObj,
    signIn,
    token,
    showLoading,
    showMessage,
    hideAuthMessage,
  } = props;
  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoading();
    signIn(authObj);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
    if (showMessage) {
      setTimeout(() => {
        hideAuthMessage();
      }, 3000);
    }
  });

  return (
    <form className="auth-form">
      <AuthFormInput
        label="Email"
        placeholder="Please enter your name"
        value={authObj}
        propertyName="email"
        onChange={setAuthObj}
      />
      <AuthFormInput
        isPassword={true}
        label="Password"
        icon="fa fa-lock"
        placeholder="Please enter your password"
        value={authObj}
        propertyName="password"
        onChange={setAuthObj}
      />{" "}
      <CustomButton onClick={(e) => handleSubmit(e)} label="Log In" />
    </form>
  );
};

const mapStateToProps = ({ auth }) => {
  const { token, showMessage } = auth;
  return { token, showMessage };
};

const mapDispatchToProps = {
  signIn,
  showLoading,
  hideAuthMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
