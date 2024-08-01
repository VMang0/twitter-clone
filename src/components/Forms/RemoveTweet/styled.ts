import styled from 'styled-components';

export const RemoveTweetContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xl};
`;
