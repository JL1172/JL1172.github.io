import { FLIP_PAGE } from "../actions/buyingFormAction"


const initialState = {
    amountOfShares : "",
    stockInformation : [],
    flipPage : false,
    accountBalance : 100000,
}

export const buyingFormReducer = (state= initialState, action) => {
    switch(action.type) {
        case(FLIP_PAGE) :
            return({...state, flipPage : !state.flipPage});
        default : 
            return(state); 
    }
}