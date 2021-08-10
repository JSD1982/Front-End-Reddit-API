import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import drawerReducer from "./drawerReducer";
import positionDataReducer from "./positionDataReducer";
const reducers = combineReducers({
  drawer: drawerReducer,
  data: dataReducer,
  positionData: positionDataReducer,
});

export default reducers;
