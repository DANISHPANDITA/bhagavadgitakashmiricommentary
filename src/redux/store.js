/** @format */

import { combineReducers, createStore } from "redux";
import counterReducer from "./slice";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";

const persistedState = loadState("State");
const reducer = combineReducers({
  shloka: counterReducer,
});

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(
  throttle(() => {
    saveState(store.getState("State"));
  }, 1000)
);

export default store;
