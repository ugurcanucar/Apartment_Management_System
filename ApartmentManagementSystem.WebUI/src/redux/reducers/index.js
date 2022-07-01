import { combineReducers } from "redux";
import Apartment from "./Apartment";
import Auth from "./Auth";
const reducers = combineReducers({
  auth: Auth,
  apartment: Apartment,
});

export default reducers;
