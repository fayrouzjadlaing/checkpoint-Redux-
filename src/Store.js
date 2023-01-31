import { createStore } from "redux";
import Taskreducer from "./reducers/Taskreducer";

const store = createStore(
  Taskreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
