import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import styled from '@emotion/styled';

function App() {
  return (
    <Main>
      <Header />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(
    rgba(71, 71, 71, 1) 54%,
    rgba(55, 55, 55, 1) 76%,
    rgba(5, 5, 5, 1) 100%
  );
`;
