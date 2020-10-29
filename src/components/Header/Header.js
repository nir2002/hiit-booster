import React from 'react';
import styled from '@emotion/styled';
import { modes } from '../../screens/WorkoutScreen';

function Header({ mode }) {
  const modesTitles = {
    [modes.Warmup]: 'Warmup',
    [modes.Boost]: 'Boost Mode',
    [modes.Recover]: 'Recover Mode',
  };

  return <HeaderContainer mode={mode}>{modesTitles[mode]}</HeaderContainer>;
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.mode === modes.Boost
      ? '#ff9408'
      : props.mode === modes.Recover
      ? '#0894FF'
      : '#fff'};
  font-size: 21px;
  flex: 0.22;
  border-bottom: solid 1px #5f5f5f;
`;
