import { combineReducers } from "redux";
import { symbolQuery } from "./symbolQueryReducer";


export const rootReducer = combineReducers({
    symbolQueryReducer : symbolQuery,
})