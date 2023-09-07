import { CHANGE_SHARE_FORM_VALUE, CONFIRMATION_MESSAGE, FLIP_PAGE, SUBMIT_PURCHASE } from "../actions/buyingFormAction"


const initialState = {
    amountOfShares : "",
    stockInformation : [],
    flipPage : false,
    accountBalance : 100000,
    total : 0,
    confirmationMessage : {message : "", confirmationMessageDeployed : false},
    confirmed : false,
}

export const buyingFormReducer = (state= initialState, action) => {
    switch(action.type) {
        case(FLIP_PAGE) :
            return({...state, flipPage : !state.flipPage});
        case(CHANGE_SHARE_FORM_VALUE) :
            return({...state, amountOfShares : action.payload[0], total : action.payload[1] * action.payload[0]});
        case(SUBMIT_PURCHASE) :
            return({...state, stockInformation : [...state.stockInformation, action.payload[0]],
            accountBalance : state.accountBalance - action.payload[1], total : 0, amountOfShares : 0})
        case(CONFIRMATION_MESSAGE) :
            return({...state, confirmationMessage: 
                {message : `Here is your purchase of ${state.amountOfShares} shares for $${state.total} from ${action.payload}, click to confirm`,
                confirmationMessageDeployed : true,
            }    
            })
        default : 
            return(state); 
    }
}