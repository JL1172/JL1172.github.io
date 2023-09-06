import axios from "axios";
import { API_KEY } from "../../@key/key";
export const CHANGE_SYMBOL = "CHANGE_SYMBOL";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const IS_FETCHING_SECURITY = "IS_FETCHING_SECURITY";
export const IS_FETCHING_ERROR = "IS_FETCHING_ERROR";
export const FETCHING_SECURITY_SUCCESS = "FETCHING_SECURITY_SUCCESS"; 
export const VIEW_SAVED_SECURITY = "VIEW_SAVED_SECURITY";
// /stock/candle?symbol=AAPL&resolution=1&from=1693493346&to=1693752546
// /stock/metric?symbol=AAPL&metric=all

//! /stock/price-target?symbol=DIS target 

export const submitSearch = (symbolInQue) => dispatch => {
    dispatch(isFetchingSecurity(true))
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbolInQue}&token=${API_KEY}`)
    .then(res=> {
        console.log(res.data)
        dispatch(fetchingSecuritySuccess(res.data))
        dispatch(isFetchingSecurity(false))
    })
    .catch(err=> dispatch(isFetchingError(err.message)))
}

export const changeSymbol = (value) => {
    
    return{type : CHANGE_SYMBOL, payload : value}
}
const isFetchingSecurity = (aBoolean) => {
    return{type : IS_FETCHING_SECURITY, payload : aBoolean}
}
const isFetchingError = (errorMessage) => {
    return{type : IS_FETCHING_SECURITY, payload : errorMessage};
}
const fetchingSecuritySuccess = (information) => {
    return{type : FETCHING_SECURITY_SUCCESS, payload : information}
}
export const viewSavedSecurities = () => {
    return{type : VIEW_SAVED_SECURITY}
}
