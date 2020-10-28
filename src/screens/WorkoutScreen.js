import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Header from './../components/Header';
import StopwatchDisplay from '../components/containers/StopwatchDisplay';
import WorkoutControls from './../components/containers/WorkoutControls';
import LapsList from './../components/containers/LapsList';
import MediaPlayer from './../components/containers/MediaPlayer';
import Stopwatch from '../utils/Stopwatch';

const stopwatch = new Stopwatch({ deltaInMsParam: 60 });

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

function WorkoutScreen() {
  useEffect(() => {
    stopwatch.start();
  });

  // Disabled for CI fix until we'll use it
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState(modes.Recover);
  return (
    <WorkoutScreenContainer>
      <Header title={modesTitles[mode]} />
      <StopwatchDisplay stopwatch={stopwatch} />
      <WorkoutControls />
      <LapsList />
      <MediaPlayer />
    </WorkoutScreenContainer>
  );
}

export default WorkoutScreen;

const WorkoutScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
