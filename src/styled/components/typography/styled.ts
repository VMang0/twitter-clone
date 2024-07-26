import styled from 'styled-components';

import { device } from '@styled/breakPoints';
import { TextType } from '@styled/components/typography/types';

export const Text = styled.p<TextType>`
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.fontWeight[fontWeight] : theme.fontWeight[400])};
  color: ${({ theme, color }) => (color ? theme.themeColors[color] : theme.themeColors[700])};
  text-align: ${({ align }) => align || 'start'};
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.xxs)};
  line-height: ${({ theme, lineHeight }) => (lineHeight ? theme.lineHeight[lineHeight] : theme.lineHeight.m)};
  font-family: ${({ theme, fontFamily }) => (fontFamily ? theme.fonts[fontFamily] : theme.fonts.main)};
  @media (${device.md}) {
    font-size: ${({ theme, mediumSize }) => (mediumSize ? theme.fontSize[mediumSize] : theme.fontSize.xs)};
  }
  @media (${device.xs}) {
    font-size: ${({ theme, smallSize }) => (smallSize ? theme.fontSize[smallSize] : theme.fontSize.xxs)};
  }
`;
