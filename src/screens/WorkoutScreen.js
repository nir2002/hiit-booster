import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './../components/Header';
import StopwatchContainer from './../components/containers/StopwatchContainer';
import WorkoutControls from './../components/containers/WorkoutControls';
import LapsList from './../components/containers/LapsList';
import MediaPlayer from './../components/containers/MediaPlayer';

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
  // Disabled for CI fix until we'll use it
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState(modes.Recover);
  return (
    <WorkoutScreenContainer>
      <Header title={modesTitles[mode]} />
      <StopwatchContainer />
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
