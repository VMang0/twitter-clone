import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from '@styled/components/typography/styled';

export const NavbarItemContainer = styled.li``;
export const NavbarItemLink = styled(Link)<{ isActivateLink: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.l};

  svg {
    path {
      fill: ${({ isActivateLink, theme }) => (isActivateLink ? theme.colors.blue.DEFAULT : theme.themeColors[700])};
    }
  }

  p {
    color: ${({ isActivateLink, theme }) => (isActivateLink ? theme.colors.blue.DEFAULT : theme.themeColors[700])};
  }
  &:focus-visible {
    outline: none;
    p {
      color: ${({ theme }) => theme.colors.blue.DEFAULT};
    }
  }
`;

export const NavbarItemText = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
