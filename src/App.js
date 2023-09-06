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
    const term = props.filteredResults.trim().toLowerCase();
    let parent = []
    let res = symbols.map(n=> {
      parent.push({description : n.description, displaySymbol : n.displaySymbol})
    })
    console.log(parent)
    if (!term) return parent;
    else {
    return parent.filter((n,i)=> {
      return n.description.toLowerCase().includes(term)
    })
  }
  }

  return (
    <StyledDiv className="App">
      <Header symbols = {filteredList()} />
      <SavedStocks />
      <Graph symbols = {symbols} />
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return {
    filteredResults : state.symbolQueryReducer.filteredResults,
  }
}

export default connect(mapStateToProps,{searchResults})(App);