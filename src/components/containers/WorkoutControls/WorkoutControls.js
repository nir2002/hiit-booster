import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as BoostModeIcon } from '../../../assets/boost-mode-icon.svg';
import { ReactComponent as RecoverModeIcon } from '../../../assets/recover-mode-icon.svg';
import { css } from '@emotion/core';
import { modes } from '../../../screens/WorkoutScreen';

function WorkoutControls({ currentMode, toggleMode }) {
  const modeBtnOnClick = (event) => {
    event.preventDefault();
    toggleMode();
  };

  const NextModeIcon = currentMode === modes.Boost ? RecoverIcon : BoostIcon;

  return (
    <Container>
      <EndWorkout>
        <EndWorkoutIcon icon={faStopCircle} size="1x" />
        End Workout
      </EndWorkout>
      <ModeToggleBtn onClick={modeBtnOnClick}>
        <NextModeIcon />
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
  align-items: center;
  font-size: 20px;
  /* border: 1px solid black; */
  padding: 8px;
  border-radius: 15px;
  background: rgb(80 80 80);
`;

const EndWorkoutIcon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const ModeToggleBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const modeButtonStyle = css`
  margin-top: 40px;
`;

const BoostIcon = styled(BoostModeIcon)`
  ${modeButtonStyle}
`;

const RecoverIcon = styled(RecoverModeIcon)`
  ${modeButtonStyle}
`;
