import React from 'react';
import styled from '@emotion/styled';

function StopwatchContainer() {
  return <Stopwatch>04 : 36 : 00</Stopwatch>;
}

export default StopwatchContainer;

const Stopwatch = styled.div`
  display: flex;
  flex: 0.15;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
  font-size: 60px;
`;
