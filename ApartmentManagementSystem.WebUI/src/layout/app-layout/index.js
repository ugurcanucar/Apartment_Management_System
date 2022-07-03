import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setUserInformations } from "redux/actions/Shared";
import Content from "./components/content";
import Sider from "./components/sider";
import "./styles.scss";
const AppLayouts = ({ setUserInformations }) => {
  const [siderVisible, setSiderVisible] = useState(true);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInformation"));
    setUserInformations(user);
  }, []);
  return (
    <div className="layout-wrapper">
      <Sider siderVisible={siderVisible} />
      <Content {...{ siderVisible, setSiderVisible }} />
    </div>
  );
};
const mapDispatchToProps = {
  setUserInformations,
};
export default connect(null, mapDispatchToProps)(AppLayouts);
