import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./store/reducer";

const initalState = {};
const middleWare = [thunk];
const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export { store };
