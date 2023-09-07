import { connect } from "react-redux"
import React from "react";
import { searchResults, submitSearch, thirdSearch } from "./actions/symbolQueryAction";

const Header = (props) => {
    return (
        <div id="header">
            <div className="profile"><span className="material-symbols-outlined">
                account_circle
            </span>Profile</div>
            <div className="rotating" style={{ display: "flex" }}>
                {props.crypto.map((n, i) => {
                    return <span key={n.id}>{n.name} <b>${n.current_price}</b></span>
                })}
            </div>
            <div className="profile">
                <span className="material-symbols-outlined">
                    info
                </span>
                Cash Balance : ${props.accountBalance}
            </div>
            <div className="profile">
                <span className="material-symbols-outlined">
                    account_balance
                </span>
                Portfolio Equity : ${props.totalEquity}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        accountBalance: state.buyingForm.accountBalance,
        filteredResults: state.symbolQueryReducer.filteredResults,
        secondaryQue: state.symbolQueryReducer.secondaryQue,
        hardFalse: state.symbolQueryReducer.hardFalse,
        crypto: state.crypto.cryptoData,
        totalEquity : state.buyingForm.totalEquity,
    }
}

export default connect(mapStateToProps, { searchResults, thirdSearch, submitSearch })(Header);