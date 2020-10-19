import styled from '@emotion/styled';
import React from 'react';
import { modes } from '../../../App';
import Lap from './../../Lap';

function Laps() {
  return (
    <LapsList>
      <Lap mode={modes.Boost} />
      <Lap mode={modes.Recover} />
      <Lap mode={modes.Boost} />
      <Lap mode={modes.Recover} />
      <Lap mode={modes.Boost} />
      <Lap mode={modes.Recover} />
      <Lap mode={modes.Boost} />
      <Lap mode={modes.Recover} />
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
