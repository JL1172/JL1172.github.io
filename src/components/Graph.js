import { connect } from "react-redux"
import React from "react"
import { StyledForm, StyledGraph, StyledReconciliation } from "./styled/styledComponents";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { addSecurity, changeSymbol, remove, setTitle, submitSearch } from "./actions/symbolQueryAction";
import { Button, Spinner } from "reactstrap";
import BuyingOption from "./BuyingOption";
import { flipPage } from "./actions/buyingFormAction";

const Graph = (props) => {
    const giveANewTitle = (symbol, title) => {
        props.submitSearch(symbol, title)
    }
    const advancedAdd = () => {
        const obj = {
            percentChange: props.currentInformation[0].dp,
            title: props.title,
            currency: props.overFlowInformation.currency,
            symbol: props.overFlowInformation.displaySymbol,
            description: props.overFlowInformation.description,
            saved: true,
            id: Date.now(),
        }

        props.addSecurity(obj)
    }
    return (
        <>
            {props.flipOver ?
                <StyledForm>
                    <BuyingOption />
                </StyledForm>
                :
                <StyledGraph>
                    {!props.isFetching ?
                        <main id="main">
                            <div id="star">
                                {!props.favorited ?
                                    <span style={{ cursor: "pointer" }} onClick={() => advancedAdd()} className="material-symbols-outlined">
                                        add_circle
                                    </span> : ""}
                            </div>
                            {props.title && <h3>{props.title} <b>${props.currentInformation[0].c}</b></h3>}
                            <div id="graphs" style={{ display: "flex" }}>
                                <LineChart width={250} height={250} data={props.currentInformation}>
                                    <Line type="monotone" stroke="#8884d8" dataKey="l" />
                                    <CartesianGrid stroke="rgb(80, 94, 138)" strokeDasharray="5 5" />
                                    <XAxis dataKey="l" />
                                    <YAxis dataKey="" />
                                    <Tooltip />
                                </LineChart>
                                <LineChart width={250} height={250} data={props.currentInformation}>
                                    <Line type="monotone" stroke="#8884d8" dataKey="h" />
                                    <CartesianGrid stroke="rgb(80, 94, 138)" strokeDasharray="5 5" />
                                    <XAxis dataKey="h" />
                                    <YAxis dataKey="" />
                                    <Tooltip />
                                </LineChart>
                            </div>
                            {props.currentInformation.length > 0 && <div style={{ display: "flex", marginTop: "2rem", marginBottom: '3rem' }}>
                                <div className="fullInfo" style={{ display: "flex", flexDirection: "column", paddingRight: "1rem" }}>
                                    <div><span className="info">High: </span> {props.currentInformation[0].h}</div>
                                    <div><span className="info">Low: </span> {props.currentInformation[0].l}</div>
                                </div>
                                <div className="fullInfo" style={{ display: "flex", flexDirection: "column", paddingRight: "1rem" }}>
                                    <div><span className="info">Current: </span> {props.currentInformation[0].c}</div>
                                    <div><span className="info">Prev Close: </span> {props.currentInformation[0].pc}</div>
                                </div>
                                <div className="fullInfo" style={{ display: "flex", flexDirection: "column" }}>
                                    <div><span className="info">Open: </span> {props.currentInformation[0].o}</div>
                                    <div><span className="info">Percent Change: </span> {props.currentInformation[0].dp}%</div>
                                </div>
                            </div>}
                            <select type="text" onChange={(e) => props.changeSymbol(e.target.value)} value={props.symbolInQue.displaySymbol}>
                                <option value="">Select Security</option>
                                {props.symbolData.map((n, i) => {
                                    return <option key={i} value={JSON.stringify(n)}>{n.displaySymbol} {n.description}</option>
                                })}
                            </select>
                            <div style={{ display: "flex" }}>
                                <button onClick={() => giveANewTitle(props.symbolInQue, props.overFlowInformation.description)}>Search</button>
                                <button onClick={() => props.flipPage()}>Buy</button>
                            </div>
                        </main>
                        :
                        <Spinner style={{ width: "5rem", height: "5rem" }}
                            className="m-5"
                            color="primary"
                        >
                            {" "}
                        </Spinner>}
                </StyledGraph>}
            <StyledReconciliation>
                {props.isFetching ?
                    <Spinner style={{ width: "5rem", height: "5rem" }}
                        className="m-5"
                        color="primary"
                    >
                        {" "}
                    </Spinner> :
                    <div>
                        {props.stockReconciliation.length > 0 && <>
                            <h2>{props.stockReconciliation[0].name}</h2>
                            <h4>{props.stockReconciliation[0].symbol}</h4>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span>Current Price : {props.stockReconciliation[0].currentPrice.toFixed(2)}</span>
                                <span>Price When Bought : {props.stockReconciliation[0].priceWhenBought.toFixed(2)}</span>
                                <span>Total shares : {props.stockReconciliation[0].shares}</span>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <span>{props.stockReconciliation[0].computations.difference < 0 ? "Total Loss"
                                        : props.stockReconciliation[0].computations.difference > 0 ? "Total Gain" : "No change"}</span>
                                    <span className={props.stockReconciliation[0].computations.difference > 0 ? "pcGreen material-symbols-outlined" :
                                        props.stockReconciliation[0].computations.difference < 0 ? "pcRed material-symbols-outlined" : "pcNeutral material-symbols-outlined"
                                    }>
                                        {props.stockReconciliation[0].computations.difference < 0 ? "trending_down" :
                                            props.stockReconciliation[0].computations.difference > 0 ? "trending_up" : "trending_flat"}
                                    </span>
                                </div>
                                <span>{props.stockReconciliation[0].computations.difference}</span>
                            </div>
                        </>}
                    </div>
                }
            </StyledReconciliation>
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentInformation: state.symbolQueryReducer.currentSecurityInformation,
        symbolInQue: state.symbolQueryReducer.symbolInQue,
        isFetching: state.symbolQueryReducer.isFetching,
        title: state.symbolQueryReducer.title,
        overFlowInformation: state.symbolQueryReducer.overFlowInformation,
        hardFalse: state.symbolQueryReducer.hardFalse,
        favorited: state.symbolQueryReducer.favorited,
        saved: state.symbolQueryReducer.savedSecurities,
        symbolData: state.crypto.symbolsData,
        flipOver: state.buyingForm.flipPage,

        isFetching: state.buyingForm.isFetching,

        stockReconciliation: state.buyingForm.stockReconciliation,

    }
}

export default connect(mapStateToProps, { changeSymbol, submitSearch, setTitle, addSecurity, remove, flipPage })(Graph);