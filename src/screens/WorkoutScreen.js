import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import StopwatchDisplay from '../components/containers/StopwatchDisplay';
import WorkoutControls from './../components/containers/WorkoutControls';
import LapsList from './../components/containers/LapsList';
import MediaPlayer from './../components/containers/MediaPlayer';
import Stopwatch from '../utils/Stopwatch';
import HomeScreen from './HomeScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Screens } from '../App';

const stopwatch = new Stopwatch({ deltaInMsParam: 60 });
const lapStopwatch = new Stopwatch({ deltaInMsParam: 60 });

export const modes = {
  Warmup: 0,
  Boost: 1,
  Recover: 2,
  End: 3,
};

function WorkoutScreen({setScreen}) {
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

  const endWorkout = () => {
    stopwatch.pause();
    setMode(modes.End);
  };

  const newWorkoutBtnOnClick = (event) => {
    // event.preventDefault();
    stopwatch.reset();
    setScreen(Screens.HomeScreen);
  };

  return (
    <WorkoutScreenContainer>
      {/* <Header mode={mode} /> */}
      <StopwatchDisplay stopwatch={stopwatch} />
      {mode === modes.End ? (
        <div>
          <h1 style={{ color: 'pink' }}>Great Workout!</h1>
          <NewWorkout onClick={newWorkoutBtnOnClick}>
            <NewWorkoutIcon icon={faPlayCircle} size="1x" /> 
            Start New Workout
          </NewWorkout>
        </div>
      ) : (
        <WorkoutControls
          currentMode={mode}
          toggleMode={toggleMode}
          endWorkout={endWorkout}
        />
      )}
      <LapsList currentMode={mode} stopwatch={lapStopwatch} />
      <MediaPlayer />
    </WorkoutScreenContainer>
  );
}

export default WorkoutScreen;

const NewWorkout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  /* border: 1px solid black; */
  padding: 8px;
  border-radius: 15px;
  background: rgb(80 80 80);
  color: white
`;

const NewWorkoutIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const WorkoutScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
