import React from 'react';
import './App.css';
import { API_KEY } from './@key/key';
import { useSymbolState } from './components/customHooks/useSymbolState';
import { StyledDiv } from './components/styled/styledComponents';
import Header from "/src/components/Header.js";
import SavedStocks from "/src/components/SavedStocks.js";
import Graph from './components/Graph';

function App() {
  const [symbols] = useSymbolState(API_KEY);
  return (
    <StyledDiv className="App">
      <Header />
      <SavedStocks />
      <Graph symbols = {symbols} />
    </StyledDiv>
  );
}

export default App;