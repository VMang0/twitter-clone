import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const WelcomeContainer = styled.div`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  flex-direction: column;
`;

export const WelcomeImage = styled.img`
  width: 58%;
  object-fit: cover;
  @media (${device.sm}) {
    display: none;
  }
`;

export const WelcomeContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100% - 55px);
  gap: 41px;
  @media (${device.sm}) {
    margin: 0 ${({ theme }) => theme.spaces.l};
  }
  @media (${device.xs}) {
    margin: 0 ${({ theme }) => theme.spaces.s};
  }
`;
