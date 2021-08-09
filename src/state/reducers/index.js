import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import drawerReducer from "./drawerReducer";

const reducers = combineReducers({
  drawer: drawerReducer,
  data: dataReducer,
});

export default reducers;
