import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import energyReducer from "./reducers/energyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  energy: energyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
