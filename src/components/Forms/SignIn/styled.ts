import styled from 'styled-components';

import { device } from '@styled/breakPoints';
import { Text } from '@styled/components/typography/styled';

export const LoginForm = styled.form`
  width: 100%;
  max-width: ${({ theme }) => theme.width.w450};
  margin: ${({ theme }) => theme.spaces.s};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xl};
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: ${({ theme }) => `${theme.spaces.xxxs} 0`};

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.themeColors[500]};
  }
  &:not(:empty)::before {
    margin-right: 0.8em;
  }

  &:not(:empty)::after {
    margin-left: 0.8em;
  }
`;

export const LoginLogo = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight[900]};
  font-size: ${({ theme }) => theme.fontSize.xxl};

  @media (${device.md}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (${device.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
