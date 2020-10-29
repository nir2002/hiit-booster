import React from 'react';
import styled from '@emotion/styled';
import Lap from './../../Lap';

function Laps({ laps = [] } = {}) {
  return (
    <LapsList>
      {laps.map((lap, index) => (
        <Lap {...lap} key={index} />
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
