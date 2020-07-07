import {
  createStore,
  applyMiddleware,
  thunk,
  composeWithDevTools,
} from "libraries";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
