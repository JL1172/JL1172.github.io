import { connect } from "react-redux"
import React from "react"
import { flipPage } from "./actions/buyingFormAction"
import { StyledForm } from "./styled/styledComponents"

const BuyingForm = (props) => {
    return(
        <div id = "buying">
            <h1>Purchase Form</h1>
            <h3>{props.title}</h3>
            <section>
            <span id = "current">Current Price/share : <b>${props.currentInformation[0].c}</b></span>
            <span id = "total">Total : <b>${}</b></span>
            </section>
            <section style = {{marginTop : "1rem"}}>
                <span>Todays High : <b>${props.currentInformation[0].h}</b></span>
                <span>Todays Low : <b>${props.currentInformation[0].l}</b></span>
            </section>
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