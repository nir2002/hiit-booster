import React, { useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import WorkoutScreen from './screens/WorkoutScreen';
import HomeScreen from './screens/HomeScreen';

export const Screens = {
  HomeScreen: 0,
  WorkoutScreen: 1,
};

export const modes = {
  Warmup: 0,
  Boost: 1,
  Recover: 2,
};

function App() {
  const [screen, setScreen] = useState(Screens.HomeScreen);
  const screens = {
    [Screens.HomeScreen]: <HomeScreen setScreen={setScreen} />,
    [Screens.WorkoutScreen]: <WorkoutScreen setScreen={setScreen}/>,
  };

  return <Main>{screens[screen]}</Main>;
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
