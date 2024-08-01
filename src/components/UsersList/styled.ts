import styled from 'styled-components';

export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.s};
  flex: 1;
`;
