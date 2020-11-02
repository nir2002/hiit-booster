import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import Lap from './../../Lap';

function Laps({ currentMode, stopwatch } = {}) {
  const [currentLapTime, setCurrentLapTime] = useState('');
  const [laps, setLaps] = useState([]);
  const stopwatchIntervalRef = useRef(undefined);
  const didMountRef = useRef(false);
  const previousModeRef = useRef(currentMode);

  const addLap = (lap) => {
    setLaps([lap, ...laps]);
  };

  useEffect(() => {
    stopwatch.start();
    stopwatchIntervalRef.current = setInterval(() => {
      setCurrentLapTime(stopwatch.toString());
    }, 60);

    return () => {
      clearInterval(stopwatchIntervalRef.current);
      stopwatchIntervalRef.current = undefined;
    };
  }, []);

  useEffect(() => {
    if (didMountRef.current) {
      addLap({ time: stopwatch.toString(), mode: previousModeRef.current });

      stopwatch.stop();
      stopwatch.start();
      previousModeRef.current = currentMode;
    } else {
      didMountRef.current = true;
    }
  }, [currentMode]);

  return (
    <LapsList>
      <Lap mode={currentMode} time={currentLapTime} key={0} isCurrent={true} />
      {laps.map((lap, index) => (
        <Lap {...lap} key={index + 1} />
      ))}
    </LapsList>
  );
}

export default Laps;

const LapsList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.65;
  overflow-y: scroll;
`;
