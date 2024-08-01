import LikeFill from '@assets/icons/like-fill-icon.svg?react';
import LikeOutline from '@assets/icons/like-outline-icon.svg?react';
import styled from 'styled-components';

export const LikesContainer = styled.div`
  display: flex;
  cursor: pointer;
  gap: ${({ theme }) => theme.gap.xs};
  align-items: center;
`;

export const LikeCount = styled.span<{ isLiked: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ isLiked }) => (isLiked ? '#ef1c5c' : '#536471')};
`;

export const LikeOutlineButton = styled(LikeOutline)<{ isLiked: boolean }>`
  border-radius: 50%;
  padding: 5px;
  path {
    fill: ${({ isLiked }) => (isLiked ? '#ef1c5c' : '#536471')};
  }
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
    path {
      fill: #ef1c5c;
    }
  }
`;

export const LikeFillButton = styled(LikeFill)<{ isLiked: boolean }>`
  border-radius: 50%;
  padding: 5px;
  path {
    fill: ${({ isLiked }) => (isLiked ? '#ef1c5c' : '#536471')};
  }
  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }
`;
