import styled from 'styled-components';

import { TwitterLogoType } from '@styled/components/logo/types';

export const TwitterLogo = styled.img<TwitterLogoType>`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '41px'};
  margin-bottom: ${({ margin }) => margin || '36px'};
  margin-inline: ${({ align }) => align || 'initial'};
`;

export const GoogleLogo = styled.img``;
