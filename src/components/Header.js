import { connect } from "react-redux"
import React from "react";
import { searchResults, submitSearch, thirdSearch } from "./actions/symbolQueryAction";

const Header = (props) => {
    return (
        <div id="header">
            <div id="profile"><span className="material-symbols-outlined">
                account_circle
            </span>Profile</div>
            <div id = "rotating" style = {{display : "flex"}}>
                {/* <input id = "search" type = "text" value = {props.filteredResults} onChange={(e)=> props.searchResults(e.target.value)} />
                <select onChange = {(e)=> props.thirdSearch(e.target.value)} value = {props.symbols} disabled = {false}>
                    {props.symbols.length === 1 ? <option value = ""></option> : "" }
                    {props.symbols.map((n,i)=> {
                        return <option 
                        value = {JSON.stringify(n)}
                         key = {i}>{n.description}</option>
                    })}
                </select>
                <button disabled = {!props.hardFalse} onClick={()=> props.submitSearch(props.secondaryQue.displaySymbol, props.secondaryQue.description)}>Fetch Data</button> */}
                {props.symbols.map((n,i)=> {
                    if (i < 100) {
                    return <div key = {i}>{n.displaySymbol}</div>
                    }
                })}
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
        secondaryQue : state.symbolQueryReducer.secondaryQue, 
        hardFalse : state.symbolQueryReducer.hardFalse,
    }
}

export default connect(mapStateToProps, {searchResults, thirdSearch, submitSearch})(Header);