import CloseIcon from '@assets/icons/close-icon.svg?react';
import styled from 'styled-components';

export const UploadedImageContainer = styled.div`
  position: relative;
  max-height: ${({ theme }) => theme.height.w300};
  max-width: 90%;
`;

export const UploadImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

export const CancelPictureButton = styled(CloseIcon)`
  position: absolute;
  right: 15px;
  top: 15px;
  padding: ${({ theme }) => theme.spaces.exs};
  margin: 0;
  width: ${({ theme }) => theme.width.w25};
  height: ${({ theme }) => theme.height.w25};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  transition: background-color 0.2s ease;
  background-color: ${({ theme }) => theme.themeColors[100]};
  color: ${({ theme }) => theme.themeColors[500]};

  &:hover {
    background-color: ${({ theme }) => theme.themeColors[400]};
  }
`;
