import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarItemContainer = styled.li``;
export const NavbarItemLink = styled(Link)<{ isActivateLink: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    color: ${({ isActivateLink, theme }) => (isActivateLink ? theme.colors.blue.DEFAULT : 'current')};
  }
  &:focus-visible {
    outline: none;
    p {
      color: ${({ theme }) => theme.colors.blue.DEFAULT};
    }
    img {
      filter: invert(42%) sepia(83%) saturate(3224%) hue-rotate(172deg) brightness(97%) contrast(103%);
    }
  }
`;

export const NavbarIcon = styled.img`
  width: 28px;
  height: 28px;
`;
