import { CHANGE_SYMBOL, FETCHING_SECURITY_SUCCESS, IS_FETCHING_ERROR, IS_FETCHING_SECURITY, SET_TITLE, VIEW_SAVED_SECURITY } from "../actions/symbolQueryAction"
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
    title : ""
}

export const symbolQuery = (state = initialState, action) => {
    switch(action.type) {
        case(CHANGE_SYMBOL) :
            return({...state, symbolInQue : action.payload});
        case(IS_FETCHING_SECURITY) :
            return({...state, isFetching : action.payload});
        case(IS_FETCHING_ERROR) :
            
            return({...state, errorMessage : action.payload, isFetching : false});
        case(FETCHING_SECURITY_SUCCESS) :
            return({...state,
                currentSecurityInformation :
                 [state.symbolInQue, action.payload], symbolInQue : ""})
        case(VIEW_SAVED_SECURITY) : 
            return({...state, viewSavedSecurities : !state.viewSavedSecurities});
        case(SET_TITLE) :
            return({...state, title : action.payload})
        default : 
            return(state);
    }
}