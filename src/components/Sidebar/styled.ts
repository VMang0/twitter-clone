import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const SidebarContainer = styled.aside<{ isMenuOpen: boolean }>`
  height: 100%;
  min-height: 100vh;
  width: ${({ theme }) => theme.width.w280};
  position: sticky;
  top: -0.1px;
  left: 0;
  max-width: ${({ theme }) => theme.width.w300};

  @media (${device.md}) {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 4;
    transition: all 0.4s;
    width: 80%;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(-100%)')};
    background-color: ${({ theme }) => theme.themeColors.DEFAULT};
  }
`;
