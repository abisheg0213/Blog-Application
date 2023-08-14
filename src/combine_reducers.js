import { combineReducers } from "redux";
import reducer from "./reducer";
const combinered = combineReducers({
  counter: reducer
});
export default combinered;
