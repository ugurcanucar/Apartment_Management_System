import "./App.css";
import "styles/colors.scss";

import Views from "./views";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Views />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
