import React from "react";
import { connect } from "react-redux";
import { Saved, chevronRight, chevronLeft } from "./styled/styledComponents";
import { viewSavedSecurities } from "./actions/symbolQueryAction";

const SavedStocks = (props) => {
    
    return (
        <>
            <Saved viewSaved={props.viewSaved} id="saved">
                <div id="quick">
                    <h4 >My Securities<span className="material-symbols-outlined">
                        finance_chip
                    </span></h4>
                    </div>
                {props.savedSecurities.length > 0 && props.savedSecurities.map((n, i) => {
                    return <div className = "savedAllOfThese" key={i}>{n.title}</div>
                })}
            </Saved>
            <span onClick={() => props.viewSavedSecurities()} 
            style={{ backgroundColor : "lightgray" ,marginTop: "5rem", cursor: 'pointer', transition : ".3s ease-in-out" }} 
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
    }
}

export default connect(mapStateToProps, { viewSavedSecurities })(SavedStocks)