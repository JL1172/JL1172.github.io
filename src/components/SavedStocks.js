import React from "react";
import { connect } from "react-redux";
import { Saved, chevronRight, chevronLeft } from "./styled/styledComponents";
import { addSecurity, remove, submitSearch, viewSavedSecurities } from "./actions/symbolQueryAction";

const SavedStocks = (props) => {

    return (
        <>
            <Saved viewSaved={props.viewSaved} id="saved">
                <div id="quick">
                    <h4 >My Watch List<span className="material-symbols-outlined">
                        finance_chip
                    </span></h4>
                </div>
                {props.savedSecurities.length > 0 && props.savedSecurities.map((n, i) => {
                    return <div key={Date.now() * Math.random() * 13920} className="savedAllOfThese" >
                        <div className="hoverOver" onClick={() => props.submitSearch(n.symbol, n.title)} key={i}>{n.saved && n.title}</div>
                        <span className={n.percentChange > 0 ? "pcGreen" : n.percentChange < 0 ? "pcRed" : "pcNeutral"}>{n.percentChange}</span>
                        <span key={Date.now() * Math.random() * 13920} style={{ cursor: "pointer" }}
                            onClick={() => props.remove(n.id)}
                            className="material-symbols-outlined">
                            delete
                        </span>
                    </div>
                })}
            </Saved>
            <span onClick={() => props.viewSavedSecurities()}
                style={{ backgroundColor: "lightgray", zIndex : "6", marginTop: "8rem", cursor: 'pointer', transition: ".3s ease-in-out" }}
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
    }
}

export default connect(mapStateToProps, { viewSavedSecurities, remove, submitSearch })(SavedStocks)