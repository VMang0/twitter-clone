import styled from 'styled-components';

import { device } from '@styled/breakPoints';
import { Text } from '@styled/components/typography/styled';

export const RegistrationForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.width.w750};
  padding: ${({ theme }) => theme.spaces.xl};
  margin: ${({ theme }) => theme.spaces.l};
  gap: ${({ theme }) => theme.gap.xl};
  box-sizing: border-box;
  transition: height 0.3s ease;

  @media (${device.sm}) {
    padding: ${({ theme }) => theme.spaces.s};
    margin: ${({ theme }) => theme.spaces.xxxs};
  }
`;

export const SelectsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.l};

  @media (${device.sm}) {
    flex-wrap: wrap;
  }
`;

export const RegistrationLogo = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (${device.md}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (${device.xs}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
