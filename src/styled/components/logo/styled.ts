import TwitterIcon from '@assets/icons/twitter-logo-icon.svg?react';
import styled from 'styled-components';

export const TwitterLogo = styled(TwitterIcon)`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '41px'};
  margin-bottom: ${({ margin }) => margin || '36px'};
`;
