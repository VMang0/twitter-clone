import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '@styled/breakPoints';
import { LinkType } from '@styled/components/link/types';

export const Link = styled(ReactLink)<LinkType>`
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.fontWeight[fontWeight] : theme.fontWeight[400])};
  color: ${({ theme, color }) => (color ? theme.themeColors[color] : theme.themeColors[700])};
  text-align: ${({ align }) => align || 'start'};
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.xxs)};
  line-height: ${({ theme, lineHeight }) => (lineHeight ? theme.lineHeight[lineHeight] : theme.lineHeight.m)};
  @media (${device.md}) {
    font-size: ${({ theme, mediumSize }) => (mediumSize ? theme.fontSize[mediumSize] : theme.fontSize.xs)};
  }
  @media (${device.xs}) {
    font-size: ${({ theme, smallSize }) => (smallSize ? theme.fontSize[smallSize] : theme.fontSize.xxs)};
  }
`;
