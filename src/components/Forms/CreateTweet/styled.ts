import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const CreateTweetContainer = styled.form`
  display: flex;
  padding: ${({ theme }) => `${theme.spaces.xxs} ${theme.spaces.m}`};
  gap: ${({ theme }) => theme.gap.s};
  @media (${device.sm}) {
    padding: ${({ theme }) => theme.spaces.xxs};
  }
`;

export const TweetTextArea = styled.textarea`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  width: 100%;
  border: none;
  resize: none;
  height: auto;
  min-height: ${({ theme }) => theme.height.w70};
  color: ${({ theme }) => theme.themeColors[700]};
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

export const CreateTweetContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.gap.s};
`;

export const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spaces.xxxs} 0`};
`;
