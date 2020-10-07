import React from 'react';
import styled from '@emotion/styled';

function Header() {
  return <HeaderContainer>Recover/Boost Mode</HeaderContainer>;
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 21px;
  flex: 0.12;
  border-bottom: solid 1px #5f5f5f;
`;
