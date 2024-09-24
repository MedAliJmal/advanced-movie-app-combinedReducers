import { combineReducers, createStore } from "redux";
import { movieReducer } from "./reducer";
import { userReducer } from "./userReducer";
import { favMoviesReducer } from "./favMovReducer";

const devtool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  combineReducers({ movieReducer, userReducer, favMoviesReducer }),
  devtool
);

export default store;
