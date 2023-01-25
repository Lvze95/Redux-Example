import { combineReducers } from "redux"
import buttonReducer from "./buttonReducer"
import testReducer from "./testReducer"
export const reducers = combineReducers({
    buttonReducer: buttonReducer,
    testReducer: testReducer,
})