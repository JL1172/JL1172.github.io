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
    return symbols.filter((n,i)=> {
      let reg = new RegExp(lookUp)
      if (reg.test(Object.values(n))) {
        return n;
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