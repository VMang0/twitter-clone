import styled from 'styled-components';

import { Text } from '@styled/components/typography/styled';

export const RecommendationsLogo = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
export const RecommendationsContainer = styled.div`
  background-color: ${({ theme }) => theme.themeColors[100]};
  border-radius: 10px;
  padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.xxs}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l};
`;
