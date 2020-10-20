import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faPauseCircle,
  faStepForward,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';

function MediaPlayer() {
  return (
    <Player>
      <PlaylistTitle>Playlist Title</PlaylistTitle>
      <TrackTitle>Track Title</TrackTitle>
      <TrackDuration>
        <TimeText>01:07</TimeText>
        <TrackProgress min={0} max={324} value={67} />
        <TimeText>5:24</TimeText>
      </TrackDuration>
      <PlayerControls>
        <FontAwesomeIcon icon={faStepBackward} size="2x" />
        <FontAwesomeIcon icon={faPauseCircle} size="4x" />
        <FontAwesomeIcon icon={faStepForward} size="2x" />
      </PlayerControls>
    </Player>
  );
}

export default MediaPlayer;

const Player = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const PlaylistTitle = styled.h1`
  height: 0;
  font-size: 16px;
`;

const TrackTitle = styled.h2`
  font-size: 14px;
`;

const TrackDuration = styled.div`
  display: flex;
  align-items: center;
`;

const TrackProgress = styled.progress`
  width: 190px;
  margin: 0 5px;
`;

const TimeText = styled.span`
  font-size: 9px;
`;

const PlayerControls = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
`;
