import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spaces.m};
  box-sizing: border-box;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.l};

  @media (${device.sm}) {
    padding: ${({ theme }) => theme.spaces.s};
  }
`;

export const NavbarContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xl};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xl};

  @media (${device.sm}) {
    gap: ${({ theme }) => theme.gap.l};
  }
`;
