import weather_reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
// to apply async actions
import thunk from "redux-thunk";
// putting reducer in store
let store = createStore(weather_reducer, applyMiddleware(thunk));
export default store;
