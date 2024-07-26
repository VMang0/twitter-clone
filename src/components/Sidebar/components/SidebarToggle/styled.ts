import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const SidebarToggleButton = styled.button`
  display: none;
  background-color: aliceblue;
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
    right: -32px;
    width: 37px;
    height: 53px;
  }
`;

export const ToggleIcon = styled.img<{ isMenuOpen: boolean }>`
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(180deg)' : 'rotate(0)')};
  max-width: 100%;
  max-height: 100%;
`;
