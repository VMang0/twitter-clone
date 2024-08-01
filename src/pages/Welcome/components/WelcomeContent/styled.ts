import styled from 'styled-components';

import { OutlineButton } from '@styled/components/button/styled';

export const WelcomeContentContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l};
`;

export const WelcomeSighUpButton = styled(OutlineButton)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  width: 100%;
  max-width: ${({ theme }) => theme.width.w400};
`;
