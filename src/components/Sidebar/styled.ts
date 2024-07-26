import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const SidebarContainer = styled.aside<{ isMenuOpen: boolean }>`
  height: 100vh;
  width: 280px;
  position: sticky;
  top: -0.1px;
  max-width: 300px;
  @media (${device.md}) {
    top: 0;
    left: 0;
    z-index: 100;
    position: fixed;
    transition: all 0.4s;
    width: 80%;
    height: 100vh;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(-100%)')};
    background-color: aliceblue;
  }
`;
