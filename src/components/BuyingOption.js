import { connect } from "react-redux"
import React from "react"
import { flipPage } from "./actions/buyingFormAction"
import { StyledForm } from "./styled/styledComponents"

const BuyingForm = (props) => {
    return(
        <div id = "buying">
            <h3>{props.title}</h3>
            <main>
            <span id = "current">Current Price : <b>${props.currentInformation[0].c}</b></span>
            <span id = "total">Total : ${}</span>
            </main>
            <form>
                <main>
                <label htmlFor="numberToPurchase">Number of Shares to purchase: </label>
                <input type = "number"/>
                </main>
            </form>
            <button onClick={()=>props.flipPage()}>Flip</button>
            <p style = {{color : "lightgray"}}>powered by smart-purchase technology</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentInformation: state.symbolQueryReducer.currentSecurityInformation,
        title: state.symbolQueryReducer.title,

    }
}

export default connect(mapStateToProps,{flipPage})(BuyingForm);