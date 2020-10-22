import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import WorkoutScreen from './screens/WorkoutScreen';

function App() {
  return (
    <Main>
      <WorkoutScreen />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  height: 100%;
  background: linear-gradient(
    rgba(71, 71, 71, 1) 54%,
    rgba(55, 55, 55, 1) 76%,
    rgba(5, 5, 5, 1) 100%
  );
`;
