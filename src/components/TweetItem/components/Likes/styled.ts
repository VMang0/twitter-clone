import styled from 'styled-components';

export const LikesContainer = styled.div`
  display: flex;
  cursor: pointer;
  gap: 5px;
  align-items: center;
`;

export const LikeCount = styled.span<{ isLiked: boolean }>`
  font-weight: 600;
  font-size: 16px;
  color: ${({ isLiked }) => (isLiked ? '#ef1c5c' : '#536471')};
`;
