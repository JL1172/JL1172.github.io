import { combineReducers } from "redux";
import { symbolQuery } from "./symbolQueryReducer";
import { cryptoCallReducer } from "./cryptoCallsReducer";


export const rootReducer = combineReducers({
    symbolQueryReducer : symbolQuery,
    crypto : cryptoCallReducer,
})