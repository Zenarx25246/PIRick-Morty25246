import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer"
import thunkMiddleware from "redux-thunk";

const composeEnhencer = window.__Redux_DEVTOOL_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhencer(applyMiddleware(thunkMiddleware))
);

export default store;