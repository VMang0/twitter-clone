import styled from 'styled-components';

export const BackgroundBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: 0 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: aliceblue;
`;
