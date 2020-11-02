import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import StopwatchDisplay from '../components/containers/StopwatchDisplay';
import WorkoutControls from './../components/containers/WorkoutControls';
import LapsList from './../components/containers/LapsList';
import MediaPlayer from './../components/containers/MediaPlayer';
import Stopwatch from '../utils/Stopwatch';

const stopwatch = new Stopwatch({ deltaInMsParam: 60 });
const lapStopwatch = new Stopwatch({ deltaInMsParam: 60 });

export const modes = {
  Warmup: 0,
  Boost: 1,
  Recover: 2,
};

function WorkoutScreen() {
  // Disabled for CI fix until we'll use it
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState(modes.Recover);

  useEffect(() => {
    stopwatch.start();

    return () => stopwatch.stop();
  }, []);

  const toggleMode = () => {
    setMode((prevMode) => {
      const nextMode = prevMode === modes.Boost ? modes.Recover : modes.Boost;

      return nextMode;
    });
  };

  return (
    <WorkoutScreenContainer>
      {/* <Header mode={mode} /> */}
      <StopwatchDisplay stopwatch={stopwatch} />
      <WorkoutControls currentMode={mode} toggleMode={toggleMode} />
      <LapsList currentMode={mode} stopwatch={lapStopwatch} />
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
