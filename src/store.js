import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from "./reducers";

let middlewares = []

const composeEnhancers =
    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, enhancer)

export { store }
