import React from 'react';
import styled from '@emotion/styled';
import { modes } from '../../screens/WorkoutScreen';

function Lap({ mode, time, isCurrent }) {
  return (
    <LapResult mode={mode} isCurrent={isCurrent}>
      <LapMode mode={mode} />
      {time}
    </LapResult>
  );
}

export default Lap;

const LapResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: ${(props) => (props.isCurrent ? `200px` : `160px`)};
  min-height: ${(props) => (props.isCurrent ? `50px` : `30px`)};
  padding: 4px 0;
  border: ${(props) =>
    props.isCurrent
      ? `1px solid ${props.mode === modes.Boost ? '#ff9408' : '#0894FF'}`
      : `none`};
  border-radius: 20px;
  background: #424242;
  margin-top: 8px;
`;

const LapMode = styled.div`
  background: ${(props) =>
    props.mode === modes.Boost
      ? 'linear-gradient(#ff9408 54%, #ffbd1c 76%, #ffdc2b 100%)'
      : props.mode === modes.Recover
      ? 'linear-gradient(#0894FF 0%, #2BFFDC 100%)'
      : 'none'};
  width: 6px;
  height: 6px;
  border-radius: 20px;
  margin-right: 8px;
`;
