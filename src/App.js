import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import styled from '@emotion/styled';
import StopwatchContainer from './components/containers/StopwatchContainer';
import WorkoutControls from './components/containers/WorkoutControls';
import LapsList from './components/containers/LapsList';
import MediaPlayer from './components/containers/MediaPlayer';

export const modes = {
  Warmup: 0,
  Boost: 1,
  Recover: 2,
};

export const modesTitles = {
  [modes.Warmup]: 'Warmup',
  [modes.Boost]: 'Boost Mode',
  [modes.Recover]: 'Recover Mode',
};

function App() {
  // Disabled for CI fix until we'll use it
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState(modes.Recover);
  return (
    <Main>
      <Header title={modesTitles[mode]} />
      <StopwatchContainer />
      <WorkoutControls />
      <LapsList />
      <MediaPlayer />
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
