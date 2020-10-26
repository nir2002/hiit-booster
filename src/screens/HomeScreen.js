import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as StartWorkoutIcon } from '../assets/startWorkout.svg';
import { ReactComponent as SpotifyIcon } from '../assets/spotify-brands.svg';
import RunningBackground from './../assets/running-background.png';
import { Screens } from '../App';

function HomeScreen({ setScreen }) {
  return (
    <HomeScreenContainer>
      <WelcomeTextContainer>
        <h1>Welcome!</h1>
        <p style={{ fontSize: 18 }}>
          Are you ready for your next HIIT workout?
          <br />
          Let's boost it up!
        </p>
      </WelcomeTextContainer>
      <ModesPlaylists>
        <LoadPlaylistButton>
          Boost Mode
          <StyledLoadFromSpotify />
        </LoadPlaylistButton>

        <LoadPlaylistButton>
          Recover Mode
          <StyledLoadFromSpotify />
        </LoadPlaylistButton>
      </ModesPlaylists>
      <StartWorkoutIcon
        style={{ marginTop: 80 }}
        onClick={() => setScreen(Screens.WorkoutScreen)}
      />
    </HomeScreenContainer>
  );
}

export default HomeScreen;

const HomeScreenContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${RunningBackground});
  background-repeat: no-repeat;

  &:after {
    content: '';
    background-image: linear-gradient(
      rgba(71, 71, 71, 1) 54%,
      rgba(55, 55, 55, 1) 76%,
      rgba(5, 5, 5, 1) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    opacity: 0.45;
  }

  > * {
    z-index: 10;
  }
`;

const WelcomeTextContainer = styled.div`
  color: #fff;
  margin: 80px 5px;
  text-align: center;
`;

const ModesPlaylists = styled.div`
  width: 100%;
  margin: 10px 0 40px 0;
  display: flex;
  justify-content: space-evenly;
`;

const LoadPlaylistButton = styled.button`
  width: 144px;
  height: 76px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #f6a020;
  background: transparent;
  border-radius: 10px;
  color: #f6a020;
`;

const LoadFromSpotify = ({ className }) => (
  <div className={className}>
    <SpotifyIcon style={{ width: 24 }} />
    <span style={{ color: 'white' }}>Load Playlist</span>
  </div>
);

const StyledLoadFromSpotify = styled(LoadFromSpotify)`
  display: flex;
  align-items: center;
  color: seagreen;
  font-size: 11px;
  margin-top: 4px;
  justify-content: space-evenly;
  width: 100%;
`;
