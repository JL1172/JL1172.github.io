import { connect } from "react-redux"
import React from "react"
import { StyledGraph } from "./styled/styledComponents";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { addSecurity, changeSymbol, setTitle, submitSearch } from "./actions/symbolQueryAction";
import { Button, Spinner } from "reactstrap";

const Graph = (props) => {
    const giveANewTitle = (symbol, title) => {
        props.submitSearch(symbol, title)
    }
    const advancedAdd = () => {
        const obj = {
            percentChange : props.currentInformation[0].dp,
            title : props.title,
            currency : props.overFlowInformation.currency,
            symbol : props.overFlowInformation.displaySymbol,
            description : props.overFlowInformation.description,
            saved : true,
            id : Date.now(),
        } 
     
        props.addSecurity(obj)
    }
    return (
        <StyledGraph>
            {!props.isFetching ?
                <main id="main">
                    <div id="star">
                        <span style = {{ cursor : "pointer"}}onClick={()=> advancedAdd()} className="material-symbols-outlined">
                            add_circle
                        </span>
                    </div>
                    {props.title && <h3>{props.title}</h3>}
                    <div id="graphs" style={{ display: "flex" }}>
                        <LineChart width={250} height={250} data={props.currentInformation}>
                            <Line type="monotone" stroke="#8884d8" dataKey="l" />
                            <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
                            <XAxis dataKey="l" />
                            <YAxis dataKey="" />
                            <Tooltip />
                        </LineChart>
                        <LineChart width={250} height={250} data={props.currentInformation}>
                            <Line type="monotone" stroke="#8884d8" dataKey="h" />
                            <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
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
                            <div><span className="info">Close: </span> {props.currentInformation[0].c}</div>
                            <div><span className="info">Prev Close: </span> {props.currentInformation[0].pc}</div>
                        </div>
                        <div className="fullInfo" style={{ display: "flex", flexDirection: "column" }}>
                            <div><span className="info">Open: </span> {props.currentInformation[0].o}</div>
                            <div><span className="info">Percent Change: </span> {props.currentInformation[0].dp}%</div>
                        </div>
                    </div>}
                    <select type="text" onChange={(e) => props.changeSymbol(e.target.value)} value={props.symbolInQue.displaySymbol}>
                        <option value="">select</option>
                        {props.symbols.map((n, i) => {
                            return <option key={i} value={JSON.stringify(n)}>{n.displaySymbol} {n.description}</option>
                        })}
                    </select>
                    <button onClick={() => giveANewTitle(props.symbolInQue, props.overFlowInformation.description)}>Search Security</button></main>

                :
                <Spinner style={{ width: "5rem", height: "5rem" }}
                    className="m-5"
                    color="primary"
                >
                    {" "}
                </Spinner>}
        </StyledGraph>
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
    }
}

export default connect(mapStateToProps, { changeSymbol, submitSearch, setTitle, addSecurity })(Graph);