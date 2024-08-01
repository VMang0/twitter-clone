import styled from 'styled-components';

export const NotificationContainer = styled.div`
  position: fixed;
  top: 120px;
  right: 10px;
  width: ${({ theme }) => theme.width.w300};
  z-index: 1000;
`;

export const NotificationWrapper = styled.div`
  background-color: ${({ theme }) => theme.themeColors[200]};
  color: ${({ theme }) => theme.themeColors[700]};
  padding: ${({ theme }) => theme.spaces.xxxs};
  margin-bottom: ${({ theme }) => theme.spaces.xxxs};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out;
`;
