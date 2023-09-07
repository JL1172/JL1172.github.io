import React from "react";
import { connect } from "react-redux";
import { Saved, chevronRight, chevronLeft } from "./styled/styledComponents";
import { addSecurity, remove, submitSearch, viewSavedSecurities } from "./actions/symbolQueryAction";
import { combineReducers } from "redux";
import { compareDifference } from "./actions/buyingFormAction";

const SavedStocks = (props) => {

    return (
        <>
            <Saved viewSaved={props.viewSaved} id="saved">
                <div className="quick">
                    <h4 >My Watch List</h4>
                    <span className="material-symbols-outlined">
                        finance_chip
                    </span>
                </div>
                {props.savedSecurities.length > 0 && props.savedSecurities.map((n, i) => {
                    return <div key={i + 1  * Math.random()*124} className="savedAllOfThese" >
                        <div className="hoverOver" onClick={() => props.submitSearch(n.symbol, n.title)} key={i}>{n.saved && n.title}</div>
                        <span 
                        className= 
                        {n.percentChange > 0 ? "pcGreen material-symbols-outlined" 
                        : n.percentChange < 0 ? "pcRed material-symbols-outlined" : "pcNeutral material-symbols-outlined"}>
                            {n.percentChange > 0 ? "trending_up" : n.percentChange < 0 ? "trending_down" : "trending_flat" }</span>
                        <span>{n.percentChange}%</span>
                        <span key={i + 1 * Math.random()*124} style={{ cursor: "pointer" }}
                            onClick={() => props.remove(n.id)}
                            className="material-symbols-outlined">
                            delete
                        </span>
                    </div>
                })}

                <div className="quick">
                    <h4>My portfolio</h4>
                    <span className="material-symbols-outlined">
                        account_balance
                    </span>
                </div>
               {props.stockInformation.length > 0 && props.stockInformation.map(n=> {
                    return <div className = "savedAllOfThese" key = {n.id}>
                        <div onClick={()=> props.compareDifference(n.symbol,n.currentPriceWhenBought)} className="hoverOver">{n.title}</div>
                        <span>total shares : {n.amountOfShares}</span>
                    </div>
               })}
            </Saved>
            <span onClick={() => props.viewSavedSecurities()}
                style={{ backgroundColor: "lightgray", zIndex: "6", marginTop: "8rem", cursor: 'pointer', transition: ".3s ease-in-out" }}
                className="material-symbols-outlined">
                {props.viewSaved ? "arrow_back" : "arrow_forward"}
            </span>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        savedSecurities: state.symbolQueryReducer.savedSecurities,
        viewSaved: state.symbolQueryReducer.viewSavedSecurities,
        currentInformation: state.symbolQueryReducer.currentSecurityInformation,
        symbolInQue: state.symbolQueryReducer.symbolInQue,
        isFetching: state.symbolQueryReducer.isFetching,
        title: state.symbolQueryReducer.title,
        overFlowInformation: state.symbolQueryReducer.overFlowInformation,
        hardFalse: state.symbolQueryReducer.hardFalse,

        stockInformation : state.buyingForm.stockInformation,
        isFetching : state.buyingForm.isFetching,

    }
}

export default connect(mapStateToProps, { viewSavedSecurities, remove, submitSearch, compareDifference })(SavedStocks)