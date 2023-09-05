import React from 'react';
import './App.css';
import { API_KEY } from './@key/key';
import { useSymbolState } from './components/customHooks/useSymbolState';
import { StyledDiv } from './components/styled/styledComponents';
import Header from "/src/components/Header.js"

function App() {
  const [symbols] = useSymbolState(API_KEY);
  return (
    <StyledDiv className="App">
      <Header />
    </StyledDiv>
  );
}

export default App;