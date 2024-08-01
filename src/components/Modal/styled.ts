import styled from 'styled-components';

export const BackgroundBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.width.w600};
  width: 100%;
  box-sizing: border-box;
  margin: ${({ theme }) => `0 ${theme.spaces.s}`};
  padding: ${({ theme }) => theme.spaces.s};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.themeColors.DEFAULT};
`;
