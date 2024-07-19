import styled from 'styled-components';

import { FlexCenterType, FlexColumnType } from '@styled/components/layout/types';

export const FlexColumn = styled.div<FlexColumnType>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, gap }) => (gap ? theme.gap[gap] : theme.gap.m)};
`;

export const FlexCenter = styled.div<FlexCenterType>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme, gap }) => (gap ? theme.gap[gap] : 0)};
`;
