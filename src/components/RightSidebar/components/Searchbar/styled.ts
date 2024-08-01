import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l};
`;
