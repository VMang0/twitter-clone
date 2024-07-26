import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const CreateTweetContainer = styled.form`
  display: flex;
  padding: 15px 25px;
  gap: 10px;
  border-bottom: 1px solid #c4c4c4;
  @media (${device.sm}) {
    padding: 15px;
  }
`;

export const TweetTextArea = styled.textarea`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  width: 100%;
  border: none;
  resize: none;
  height: auto;
  min-height: 70px;
  background-color: transparent;
  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const UploadPictureIcon = styled.img``;

export const CreateTweetContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
