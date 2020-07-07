import { combineReducers } from "libraries";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({
  results: moviesReducer,
});

export default rootReducer;
