import { combineReducers } from "redux";
import Apartment from "./Apartment";
import Auth from "./Auth";
import Shared from "./Shared";
const reducers = combineReducers({
  auth: Auth,
  apartment: Apartment,
  shared: Shared,
});

export default reducers;
