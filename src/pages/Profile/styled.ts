import styled from 'styled-components';

import { PageContainer } from '@styled/components/layout/styled';

export const ProfileContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l};
`;
