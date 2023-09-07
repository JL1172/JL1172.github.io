export const FLIP_PAGE = "FLIP_PAGE";
export const CHANGE_SHARE_FORM_VALUE = "CHANGE_SHARE_FORM_VALUE";
export const SUBMIT_PURCHASE = "SUBMIT_PURCHASE";
export const CONFIRMATION_MESSAGE = "CONFIRMATION_MESSAGE";
export const RECTIFY_POSITIONS= "RECTIFY_POSITIONS";    

export const flipPage = () => {
    return{type : FLIP_PAGE}
}

export const changeShareFormValue = (value,pps) => {
    return{type : CHANGE_SHARE_FORM_VALUE, payload : [value,pps]}
}

export const submitPurchase = (stockPurchaseInformation) => {
    return{type : SUBMIT_PURCHASE, payload : [stockPurchaseInformation]}
}

export const confirmationMessage = (title) => {
    return {type : CONFIRMATION_MESSAGE, payload : title}
}

export const rectifyPositions = () => {
    return{type : RECTIFY_POSITIONS}
}
