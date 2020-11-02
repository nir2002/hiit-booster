import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';

function StopwatchDisplay({ stopwatch }) {
  const [displayTime, setDisplayTime] = useState('');
  const stopwatchIntervalRef = useRef(undefined);

  useEffect(() => {
    stopwatchIntervalRef.current = setInterval(() => {
      setDisplayTime(stopwatch.toString());
    }, 60);

    return () => {
      clearInterval(stopwatchIntervalRef.current);
      stopwatchIntervalRef.current = undefined;
    };
  }, []);

  return <Stopwatch>{displayTime}</Stopwatch>;
}

export default StopwatchDisplay;

const Stopwatch = styled.div`
  display: flex;
  flex: 0.15;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
  font-size: 60px;
`;
