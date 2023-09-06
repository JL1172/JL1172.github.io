import React from 'react';
import './App.css';
import { API_KEY } from './@key/key';
import { useSymbolState } from './components/customHooks/useSymbolState';
import { StyledDiv } from './components/styled/styledComponents';
import Header from "/src/components/Header.js";
import SavedStocks from "/src/components/SavedStocks.js";
import Graph from './components/Graph';
import { connect } from 'react-redux';
import { searchResults } from './components/actions/symbolQueryAction';

function App(props) {
  const [symbols] = useSymbolState(API_KEY);
  const filteredList = () => {
    let lookUp = props.filteredResults.trim().toLowerCase();
    if (!lookUp) return symbols;
    let symbolDescriptions = [];
    let res = symbols.map((n,i)=> {
      symbolDescriptions.push(n.description);
    })
    return symbolDescriptions.filter((n,i)=> {
        if(n.toLowerCase().includes(lookUp)) {
          let index = symbolDescriptions.findIndex(item => item.toLowerCase() == n.toLowerCase())
          return symbols.at(index);
        }
    })
  }
  return (
    <StyledDiv className="App">
      <Header />
      <SavedStocks />
      <Graph symbols = {filteredList()} />
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return {
    filteredResults : state.symbolQueryReducer.filteredResults,
  }
}

export default connect(mapStateToProps,{searchResults})(App);