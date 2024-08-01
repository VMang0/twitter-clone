import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const ContentContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin-inline: auto;
  max-width: ${({ theme }) => theme.width.w1580};
  padding: 0 ${({ theme }) => theme.spaces.xxxs};
  @media (${device.xs}) {
    padding: 0;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.themeColors[300]};
  border-right: 1px solid ${({ theme }) => theme.themeColors[300]};
`;
