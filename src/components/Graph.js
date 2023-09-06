import { connect } from "react-redux"
import React from "react"
import { StyledGraph } from "./styled/styledComponents";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { changeSymbol } from "./actions/symbolQueryAction";

const Graph = (props) => {

    return (
        <StyledGraph>
            {/* <LineChart width={1000} height={300} data={props.currentInformation}>
                <Line type="monotone" stroke="#8884d8" dataKey="value" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart> */}
            <select type = "text" onChange={(e)=>props.changeSymbol(e.target.value)} value={props.symbolInQue}>
                <option value="">Select Symbol To Search</option>
                {props.symbols.map((n,i)=> {
                    const obj = [
                        n.description, n.displaySymbol,
                    ]
                    return <option key = {i} value = {obj}>{n.displaySymbol} {n.description}</option>
                })}
            </select>
        </StyledGraph>
    )
}

const mapStateToProps = state => {
    return {
        currentInformation: state.symbolQueryReducer.currentSecurityInformation,
        symbolInQue : state.symbolQueryReducer.symbolInQue,
    }
}

export default connect(mapStateToProps, {changeSymbol})(Graph);