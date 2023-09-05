import { connect } from "react-redux"
import React from "react";

const Header = (props) => {
    return (
        <div id="header">
            <div id="profile"><span className="material-symbols-outlined">
                account_circle
            </span>Profile</div>
            <div id="accountBalance">
                <span class="material-symbols-outlined">
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
    }
}

export default connect(mapStateToProps, {})(Header);