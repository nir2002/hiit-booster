import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as BoostModeIcon } from '../../../assets/boostModeIcon.svg';

function WorkoutControls() {
  return (
    <Container>
      <EndWorkout>
        <EndWorkoutIcon icon={faStopCircle} />
        End Workout
      </EndWorkout>
      <ModeToggleBtn>
        <ModeSwitchIcon />
        <ModeSwitchText>Boost!</ModeSwitchText>
      </ModeToggleBtn>
    </Container>
  );
}

export default WorkoutControls;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  color: #fff;
`;

const EndWorkout = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const EndWorkoutIcon = styled(FontAwesomeIcon)`
  padding: 0 7px;
`;

const ModeToggleBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModeSwitchIcon = styled(BoostModeIcon)`
  margin-top: 40px;
`;

const ModeSwitchText = styled.div`
  position: absolute;
  top: 48%;
  left: 32%;
  font-size: 33px;
  color: #3b3b3b;
`;
