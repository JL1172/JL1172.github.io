import { CHANGE_SYMBOL, FETCHING_SECURITY_SUCCESS, IS_FETCHING_ERROR, IS_FETCHING_SECURITY, SEARCH_RESULTS, SET_TITLE, THIRD_SEARCH, VIEW_SAVED_SECURITY } from "../actions/symbolQueryAction"
import { API_KEY } from "../../@key/key";
import { useSymbolState } from "../customHooks/useSymbolState";



const initialState = {
    symbolInQue : [],
    isFetching : false,
    errorMessage : "",
    currentSecurityInformation : [],
    savedSecurities : [],
    viewSavedSecurities : false,
    accountBalance : 100000,
    title : "",
    filteredResults : "",
    overFlowInformation : [],
    hardFalse : false,
    secondaryQue : [],
}

export const symbolQuery = (state = initialState, action) => {
    switch(action.type) {
        case(CHANGE_SYMBOL) :
        let parsed = JSON.parse(action.payload);
            return({...state, symbolInQue : parsed.displaySymbol, overFlowInformation : parsed});
        case(IS_FETCHING_SECURITY) :
            return({...state, isFetching : action.payload});
        case(IS_FETCHING_ERROR) :
            return({...state, errorMessage : action.payload, isFetching : false});
        case(FETCHING_SECURITY_SUCCESS) :
            return({...state,
                currentSecurityInformation :
                 [action.payload], hardFalse : false, filteredResults : "", secondaryQue : "", symbolInQue : ""}) //!symbolInQue
        case(VIEW_SAVED_SECURITY) : 
            return({...state, viewSavedSecurities : !state.viewSavedSecurities});
        case(SET_TITLE) :
            return({...state, title : action.payload});
        case(SEARCH_RESULTS) : 
            return({...state, filteredResults : action.payload, secondaryQue : "", hardFalse : false})
        case(THIRD_SEARCH) :
        let newParse = JSON.parse(action.payload)
        console.log(newParse)
            return({...state, secondaryQue :
                 {description : newParse.description, displaySymbol : newParse.displaySymbol}, hardFalse : true})
        default : 
            return(state);
    }
}