import { connect } from "react-redux"
import React from "react";
import { searchResults } from "./actions/symbolQueryAction";

const Header = (props) => {
    return (
        <div id="header">
            <div id="profile"><span className="material-symbols-outlined">
                account_circle
            </span>Profile</div>
            <div>
                <input type = "text" value = {props.filteredResults} onChange={(e)=> props.searchResults(e.target.value)} />
            </div>
            <div id="accountBalance">
                <span className="material-symbols-outlined">
                    info
                </span>
                Account Balance : ${props.accountBalance}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        accountBalance: state.symbolQueryReducer.accountBalance,
        filteredResults : state.symbolQueryReducer.filteredResults,
    }
}

export default connect(mapStateToProps, {searchResults})(Header);