import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.m};
  background-color: transparent;
  backdrop-filter: blur(12px);
  top: -0.1px;
  z-index: 3;
`;
