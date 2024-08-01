import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const WelcomeLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gap.m};
  padding-top: ${({ theme }) => theme.spaces.s};
  margin: auto ${({ theme }) => theme.spaces.s};

  @media (${device.xs}) {
    display: none;
  }
`;
