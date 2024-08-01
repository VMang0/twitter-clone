import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const RightSidebarContainer = styled.div`
  max-width: ${({ theme }) => theme.width.w350};
  padding: ${({ theme }) => theme.spaces.xxs} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l};
  margin-left: ${({ theme }) => theme.spaces.s};

  @media (${device.sm}) {
    display: none;
  }
`;
