import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

function StopwatchDisplay({ stopwatch }) {
  const [displayTime, setDisplayTime] = useState('');
  useEffect(() => {
    setInterval(() => {
      setDisplayTime(stopwatch.displayTime());
    }, 60);
  });

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
