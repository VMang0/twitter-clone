import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  flex-direction: column;
`;

export const WelcomeImage = styled.img`
  width: 58%;
  object-fit: cover;
`;

export const WelcomeContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100% - 55px);
  gap: 41px;
`;
