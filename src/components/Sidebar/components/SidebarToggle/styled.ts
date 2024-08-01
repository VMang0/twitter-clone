import SidebarIcon from '@assets/icons/sidebar-icon.svg?react';
import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const SidebarToggleButton = styled.button`
  display: none;
  background-color: ${({ theme }) => theme.themeColors[800]};
  @media (${device.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translateY(-50%);
    border-radius: 0;
    border: none;
    clip-path: polygon(0 0, 100% 12%, 100% 88%, 0% 100%);
    padding: 0;
    text-align: center;

    top: 48px;
    right: -37px;
    width: 37px;
    height: 53px;
  }
`;

export const ToggleIcon = styled(SidebarIcon)<{ isMenuOpen: boolean }>`
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(180deg)' : 'rotate(0)')};
  max-width: 100%;
  max-height: 100%;
`;
