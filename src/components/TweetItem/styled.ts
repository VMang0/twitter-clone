import TrashIcon from '@assets/icons/trash-icon.svg?react';
import styled from 'styled-components';

import { device } from '@styled/breakPoints';
import { Text } from '@styled/components/typography/styled';

export const TweetItemContainer = styled.article<{ isSearchTweet: boolean }>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  cursor: ${({ isSearchTweet }) => (isSearchTweet ? 'pointer' : 'default')};
  padding: ${({ isSearchTweet }) => (isSearchTweet ? '10px 5px' : '10px 25px')};
  gap: ${({ theme }) => theme.gap.m};
  border-bottom: 1px solid ${({ theme }) => theme.themeColors[300]};
`;

export const TweetContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.gap.s};
`;

export const CreatorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s};
`;

export const TweetImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  max-height: ${({ theme }) => theme.height.w300};
  max-width: 90%;
  object-fit: contain;
  display: block;
`;

export const TrashButton = styled(TrashIcon)`
  padding: ${({ theme }) => theme.spaces.exs};
  cursor: pointer;
  margin-left: auto;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  path {
    stroke: red;
  }
  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }
`;

export const TweetText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (${device.xs}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
