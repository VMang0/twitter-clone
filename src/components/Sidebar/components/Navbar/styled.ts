import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 20px;

  @media (${device.sm}) {
    padding: 20px;
  }
`;

export const NavbarContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (${device.sm}) {
    gap: 20px;
  }
`;
