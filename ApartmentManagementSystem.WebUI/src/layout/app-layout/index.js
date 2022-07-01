import { useState } from "react";
import Content from "./components/content";
import Sider from "./components/sider";
import "./styles.scss";
const AppLayouts = () => {
  const [siderVisible, setSiderVisible] = useState(true);

  return (
    <div className="layout-wrapper">
      <Sider siderVisible={siderVisible} />
      <Content {...{ siderVisible, setSiderVisible }} />
    </div>
  );
};

export default AppLayouts;
