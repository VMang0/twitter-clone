import styled from 'styled-components';

export const TweetItemContainer = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
  gap: 15px;
  border-bottom: 1px solid #c4c4c4;
`;

export const TweetContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`;

export const CreatorInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TweetImage = styled.img`
  border-radius: 20px;
  max-height: 300px;
  max-width: 90%;
  object-fit: contain;
  display: block;
`;
