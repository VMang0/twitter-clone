import styled from 'styled-components';

export const TweetsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.s};
  flex-grow: 1;
  height: 100%;
`;
